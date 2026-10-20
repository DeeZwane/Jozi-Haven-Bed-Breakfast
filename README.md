# Jozi Haven Bed & Breakfast | AWS Static Website Hosting

A static website hosting project demonstrating how Amazon Web Services (AWS) can support the online presence of a small hospitality business.

**Project type:** AWS Cloud / Static Website Hosting
**Cloud service:** Amazon S3
**Region:** `us-east-1`
**Programme:** PRAESIGNIS AWS re/START (Special Projects: Project 1)

## Project Overview

Jozi Haven Bed & Breakfast is a fictional guesthouse based in Johannesburg, South Africa. The project comes after learning about AWS S3 buckets and explores how a small accommodation business can provide prospective guests with information about its rooms, services, location, and booking enquiries through a website hosted in the cloud.

The website was developed as part of a group project and deployed using a live demonstration during presentations. I also deployed the website to my own AWS account and am documenting the implementation and lessons learned in this repository.

## Business Problem

A small guesthouse needs an accessible online presence to communicate its services and help prospective guests submit booking enquiries.

This project demonstrates how a static website hosted on AWS can make business information available online and provide a structured client-side booking-request experience.

## Website Features

- **Homepage:** Guesthouse information, room options, services, location, and contact details.
- **Booking request form:** Collects booking-request information and provides a live price estimate.
- **Confirmation page:** Displays submitted request details read from the URL.
- **Custom error page:** Provides a dedicated page for unavailable website resources.
- **Responsive styling:** CSS styling and JavaScript interactions support the website experience.

## Technology Stack

| Technology         | Purpose                                                  |
| ------------------ | -------------------------------------------------------- |
| Amazon S3          | Stores and hosts static website files                    |
| AWS CLI            | Supports AWS account verification and website deployment |
| HTML               | Website structure and content                            |
| CSS                | Layout and visual presentation                           |
| JavaScript         | Client-side interactions and booking estimates           |
| Git and GitHub     | Source control and project documentation                 |
| Windows PowerShell | Local command-line environment                           |

## AWS Implementation

The website was deployed to Amazon S3 using the following configuration:

| Setting           | Value                                   |
| ----------------- | --------------------------------------- |
| S3 bucket         | `jozihavenbedbreakfast-static-web-2026` |
| AWS Region        | `us-east-1`                             |
| Hosting           | S3 static website hosting               |
| Website access    | Public read access to website objects   |
| Deployment method | AWS CLI from Windows PowerShell         |

The deployment involved configuring static website hosting, setting the required bucket permissions, uploading the website files, and testing the hosted site.

### Architecture

```text
Developer / GitHub Repository
             |
             | AWS CLI deployment
             v
     Amazon S3 Bucket
     (Static Website Hosting)
             |
             | HTTP website endpoint
             v
       Visitor's Browser
             |
       +-----+------+
       |     |      |
     Pages Assets Booking
                    form
```

## Repository Structure

```text
Jozi-Haven-Bed-Breakfast/
├── css/
│   └── style.css
├── images/
├── js/
│   └── main.js
├── portfolio-docs/
│   ├── project-overview.md
│   ├── aws-architecture.md
│   ├── deployment-guide.md
│   └── lessons-learned.md
├── booking.html
├── confirmation.html
├── error.html
├── index.html
└── README.md
```

## Project Documentation

Explore the supporting documentation:

- [Project Overview](portfolio-docs/project-overview.md) — business problem, objectives, features, and technologies.
- [AWS Architecture](portfolio-docs/aws-architecture.md) — S3 hosting components, request flow, and security considerations.
- [Deployment Guide](portfolio-docs/deployment-guide.md) — AWS CLI deployment process and validation.
- [Lessons Learned](portfolio-docs/lessons-learned.md) — troubleshooting, technical learning, and potential improvements.

## Testing and Validation

The deployed website was tested to check:

- Homepage loading and page navigation.
- CSS styling and image loading.
- Booking form behaviour and price estimation.
- Confirmation page behaviour.
- Availability of the custom error page.

## Security Considerations

The S3 website configuration allows public access to the static content intended for visitors. Public access should be limited to the files and permissions required by the website.

The S3 static website endpoint uses HTTP rather than HTTPS. A production implementation could use Amazon CloudFront with a private S3 origin to support HTTPS and improve content delivery.

The booking form is a client-side demonstration, not a production booking system. It does not provide persistent reservation storage, payment processing, or secure server-side booking management.

## Future Improvements

- Configure HTTPS and a custom domain using Amazon CloudFront.
- Keep the S3 origin private behind CloudFront.
- Introduce a backend API and database for booking management.
- Add automated deployment from version control.
- Expand testing, monitoring, and operational documentation.

## Key Skills Demonstrated

- Amazon S3 static website hosting.
- AWS CLI and PowerShell.
- S3 bucket policies and public-access configuration.
- Website deployment and testing.
- Git and GitHub version control.
- Cloud troubleshooting and technical documentation.

## Acknowledgement

This website originated as a group project under the PRAESIGNIS AWS re/START programme (Special Projects). The repository is a personal fork used to document my learning and hands-on AWS deployment work.
