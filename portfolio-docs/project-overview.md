# Jozi Haven Bed & Breakfast — AWS Static Website Hosting

## 1. Project Overview

Jozi Haven Bed & Breakfast is a static website hosting project developed to demonstrate how a small hospitality business (guesthouse) can establish an online presence using Amazon Web Services (AWS).

The website provides visitors with information about the guesthouse, its rooms, guest services, location, and contact details. It also includes a booking request form and a confirmation page to demonstrate the customer booking journey.

## 2. Business Problem

Small accommodation business needs an accessible online presence where prospective guests can explore their offerings and submit booking enquiries.

Managing customer enquiries without a clear digital process has led to confusion, missed requests, and an inconsistent customer experience.

The project demonstrates how a simple website can help organise the information presented to prospective guests and provide a more structured booking-request experience.

Hosting it on AWS demonstrates how the business can save on costs by using the cost-efficient & pay-as-you-go model, while getting enterprise-grade infrastructure that's highly reliable, has global reach and access to other flexible management tools specifically tailored to static (and dynamic) applications.

## 3. Project Objectives

- Build a functional, responsive static website for a guesthouse.
- Host the website using Amazon S3 static website hosting.
- Use AWS CLI to manage and deploy website files.
- Configure access permissions required for public website access.
- Test the website's navigation, styling, images, and booking-request flow.
- Document the deployment process and lessons learned.

## 4. Technology Stack

- **Amazon S3:** Stores and serves the static website files.
- **AWS CLI:** Supports command-line interaction with AWS and website deployment.
- **HTML:** Defines the website's page structure and content.
- **CSS:** Controls layout, styling, and presentation.
- **JavaScript:** Supports client-side website interactions.
- **Git and GitHub:** Support version control, source-code management, and portfolio documentation.
- **Windows PowerShell:** Provides the local command-line environment used for project and deployment tasks.

## 5. Website Features

- Homepage with guesthouse information.
- Room and guest-service information.
- Location and contact details.
- Booking request form.
- Booking confirmation page.
- Custom error page.
- Shared styling, images, and JavaScript assets.

## 6. AWS Implementation

The website was deployed to an Amazon S3 bucket named `jozihavenbedbreakfast-static-web-2026` in the `us-east-1` region.

The implementation included:

1. Configuring AWS CLI access to the AWS account.
2. Creating and configuring the S3 bucket.
3. Enabling static website hosting.
4. Configuring the bucket policy to allow public read access to website objects.
5. Uploading the website files to the bucket.
6. Testing the hosted website and its main features.

## 7. Testing and Validation

After deployment, the website was tested to verify that:

- The homepage loads successfully.
- Navigation between pages works.
- CSS styling and images display correctly.
- The booking form's client-side behaviour works as expected.
- The confirmation and error pages are available.

## 8. Skills Demonstrated

- AWS S3 static website hosting.
- AWS CLI usage.
- Basic AWS access and bucket-policy configuration.
- Static website deployment and validation.
- HTML, CSS, and JavaScript fundamentals.
- Git and GitHub version control.
- Troubleshooting and technical documentation.

## 9. Project Outcome

The project resulted in a functioning static website hosted on Amazon S3. It provided practical experience with cloud-based website hosting, command-line deployment, access configuration, and testing.

## 10. Scope and Limitations

This project demonstrates static website hosting and a client-side booking-request experience. The website does not, by itself, provide a production booking backend, persistent booking storage, payment processing, or automated email notifications.

A future enhancement using AWS Lambda, Amazon CloudFront and a few other services, could introduce a backend service and database to securely process and manage real booking requests.

## 11. Repository

Source code and project documentation are maintained in this GitHub repository.
