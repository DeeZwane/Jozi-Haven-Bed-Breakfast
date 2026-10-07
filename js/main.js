/* Jozi Haven: shared behaviour. Each init function exits early on pages that lack its elements. */
(function () {
  "use strict";

  var ROOMS = {
    "Garden Room": { rate: 1100, sleeps: 2 },
    "Jacaranda Room": { rate: 1250, sleeps: 2 },
    "Family Room": { rate: 1600, sleeps: 4 }
  };
  var DAY = 86400000;

  function $(id) { return document.getElementById(id); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function isoLocal(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function parse(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || "");
    return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
  }
  function addDays(s, n) {
    var d = new Date(parse(s) + n * DAY);
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate());
  }
  function nightsBetween(a, b) {
    var n = Math.round((parse(b) - parse(a)) / DAY);
    return n > 0 ? n : 0;
  }
  function money(n) { return "R" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }
  function longDate(s) {
    return new Date(parse(s)).toLocaleDateString("en-ZA", {
      weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC"
    });
  }

  /* Mobile navigation */
  function initNav() {
    var btn = $("nav-toggle"), nav = $("site-nav");
    if (!btn || !nav) return;
    function set(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("open", open);
    }
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  }

  /* Check-out can never be on or before check-in; check-in can never be in the past */
  function linkDates(checkin, checkout) {
    if (!checkin || !checkout) return;
    var today = isoLocal(new Date());
    checkin.min = today;
    function sync() {
      checkout.min = addDays(checkin.value || today, 1);
      if (checkout.value && checkout.value < checkout.min) checkout.value = checkout.min;
    }
    checkin.addEventListener("change", sync);
    sync();
  }

  /* Home page availability box (submits to booking.html as a plain GET) */
  function initQuickForm() {
    linkDates($("q-checkin"), $("q-checkout"));
  }

  /* Booking form: prefill, capacity limit, live estimate */
  function initBooking() {
    var form = $("booking");
    if (!form) return;
    var f = form.elements;
    var params = new URLSearchParams(location.search);

    ["checkin", "checkout", "guests"].forEach(function (k) {
      var v = params.get(k);
      if (v) f[k].value = v;
    });
    if (ROOMS[params.get("room")]) f.room.value = params.get("room");
    linkDates(f.checkin, f.checkout);

    var out = {
      room: $("sum-room"), stay: $("sum-stay"), total: $("sum-total"), hint: $("guest-hint")
    };

    function update() {
      var room = ROOMS[f.room.value];
      var n = nightsBetween(f.checkin.value, f.checkout.value);
      f.guests.max = room.sleeps;
      if (+f.guests.value > room.sleeps) f.guests.value = room.sleeps;
      out.hint.textContent = "This room sleeps up to " + room.sleeps + ".";
      out.room.textContent = f.room.value + ", " + money(room.rate) + " per night";
      out.stay.textContent = n ? plural(n, "night") : "Choose your dates";
      out.total.textContent = n ? money(n * room.rate) : "Not yet available";
      f.checkout.setCustomValidity(
        f.checkin.value && f.checkout.value && !n ? "Check-out must be after check-in." : ""
      );
    }
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    update();
  }

  /* Confirmation: read the request from the URL and show it */
  function initConfirmation() {
    var list = $("s");
    if (!list) return;
    var p = new URLSearchParams(location.search);
    var room = ROOMS[p.get("room")];
    var n = nightsBetween(p.get("checkin"), p.get("checkout"));
    var ok = p.get("name") && p.get("email") && room && n;

    $("received").hidden = !ok;
    $("missing").hidden = !!ok;
    if (!ok) return;

    function row(label, value, cls) {
      var dt = document.createElement("dt"), dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      if (cls) dd.className = cls;
      list.append(dt, dd);
    }

    var guests = parseInt(p.get("guests"), 10);
    var services = p.getAll("svc");
    var notes = (p.get("notes") || "").trim();

    $("to").textContent = p.get("email");
    var s = location.search, h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    $("ref").textContent = "JH-" + h.toString(36).toUpperCase().padStart(6, "0").slice(-6);

    row("Name", p.get("name"));
    row("Room", p.get("room"));
    row("Check-in", longDate(p.get("checkin")));
    row("Check-out", longDate(p.get("checkout")));
    row("Stay", plural(n, "night"));
    if (guests > 0) row("Guests", String(guests));
    if (services.length) row("Services", services.join(", "));
    if (notes) row("Notes", notes);
    row("Estimated total", money(n * room.rate), "total");
  }

  function init() {
    initNav();
    initQuickForm();
    initBooking();
    initConfirmation();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
