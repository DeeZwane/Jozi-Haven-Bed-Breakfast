# AWS Architecture — Jozi Haven Bed & Breakfast

## 1. Architecture Overview

Jozi Haven Bed & Breakfast is hosted as a static website using Amazon Simple Storage Service (Amazon S3).

The website's HTML pages, CSS stylesheet, JavaScript files, and images are stored as objects in an S3 bucket. Amazon S3 static website hosting serves the website content to visitors through its website endpoint.

## 2. Architecture Components

| Component | Purpose |
|---|---|
| Amazon S3 bucket | Stores the website's static files. |
| S3 static website hosting | Serves the website through an S3 website endpoint. |
| Bucket policy | Allows public read access to website objects. |
| AWS CLI | Supports bucket configuration and file deployment from PowerShell. |
| GitHub repository | Stores the source code and project documentation. |
| Web browser | Allows visitors to access and test the hosted website. |

## 3. Request Flow

1. A visitor opens the website endpoint in a web browser.
2. Amazon S3 receives the request through its static website hosting endpoint.
3. S3 serves the requested HTML page or supporting asset, provided the relevant object exists and permissions allow access.
4. The browser loads the page's CSS, JavaScript, and images.
5. The visitor can navigate the website and interact with the client-side booking form.

## 4. High-Level Architecture Diagram

```text
Developer
   |
   | Maintains source code
   v
GitHub Repository
   |
   | Website files deployed using AWS CLI
   v
Amazon S3 Bucket
   |
   | Static website hosting endpoint
   v
Visitor's Web Browser
   |
   +--> Homepage and information pages
   +--> CSS, JavaScript and images
   +--> Booking request form
   +--> Confirmation and error pages
```

## 5. S3 Configuration

The deployed bucket uses the following configuration:

- **Bucket name:** `jozihavenbedbreakfast-static-web-2026`
- **AWS Region:** `us-east-1` (US East — N. Virginia)
- **Hosting type:** Amazon S3 static website hosting
- **Access model:** Public read access to website objects through a bucket policy

The bucket's public-access-block settings were adjusted to permit the intended public website access. The bucket policy grants `s3:GetObject` permission on objects within the website bucket.

## 6. Security Considerations

This demonstration intentionally makes website objects publicly readable so visitors can access the static site.

Important considerations:

- Never place AWS access keys, passwords, or other secrets in the website files or GitHub repository.
- Keep AWS CLI credentials outside the project directory and do not commit credential files.
- Public access should be restricted to the objects and permissions required by the website.
- A public S3 website endpoint does not, by itself, provide HTTPS.
- For a production deployment requiring HTTPS, a common architecture is Amazon CloudFront in front of a private S3 bucket, with appropriate origin access controls.
- The static booking form is not a secure backend for storing or processing real customer reservations.

## 7. Limitations and Future Improvements

The current implementation focuses on static content delivery. Potential improvements include:

- Amazon CloudFront for content delivery and HTTPS.
- A private S3 origin protected by CloudFront origin access controls.
- AWS Certificate Manager for a custom-domain TLS certificate when used with CloudFront.
- A backend API and database for securely processing booking requests.
- Monitoring and logging appropriate to the deployment's requirements.

## 8. Summary

This architecture demonstrates the fundamentals of hosting a static website on AWS, configuring S3 website access, deploying files with AWS CLI, and validating a cloud-hosted website.

It provides a foundation for exploring more secure and scalable architectures as the project evolves.
