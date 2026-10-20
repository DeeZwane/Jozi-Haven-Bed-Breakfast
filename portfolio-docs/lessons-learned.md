# Lessons Learned — Jozi Haven Bed & Breakfast

## 1. Project Reflection

Deploying the Jozi Haven Bed & Breakfast website to Amazon S3 provided practical experience with cloud hosting, AWS CLI, access permissions, version control, and deployment troubleshooting.

The project helped connect cloud computing concepts with a working website hosted in an AWS account.

## 2. Technical Lessons

### Amazon S3 Static Website Hosting

I learned how Amazon S3 can host static website content, including HTML pages, CSS stylesheets, JavaScript files, and images.

I also learned that uploading website files is only one part of deployment. Static website hosting must be enabled, and the necessary permissions must be configured for visitors to access the content.

### AWS CLI and PowerShell

I gained practical experience using AWS CLI from Windows PowerShell to interact with AWS resources and manage website deployment.

Commands such as `aws sts get-caller-identity` helped verify the identity associated with the configured AWS CLI credentials.

### Access Permissions and Security

I learned how bucket policies and S3 Block Public Access settings affect public access to website objects.

I also learned that AWS recommends using a bucket policy for public website read access instead of enabling ACLs (outdated method).

This reinforced the importance of granting only the permissions required for the intended use case and avoiding the exposure of credentials or private configuration files.

### Deployment Directory and File Selection

One important troubleshooting lesson was the need to run deployment commands from the correct project directory.

A recursive upload from the wrong directory can include unrelated files. Verifying the current location and reviewing the source files before deployment helps prevent accidental uploads.

### Testing and Validation

I learned to validate the deployed website in a browser rather than assuming that a successful upload means the site is fully functional.

Testing included checking page navigation, styling, images, and the booking-request flow.

## 3. Challenges and How I Addressed Them

### AWS CLI Authentication

An initial AWS CLI identity check returned an invalid-token error.

I addressed the configuration issue and subsequently verified the active AWS identity. This reinforced the importance of checking authentication before running resource-management commands.

### Correct Deployment Scope

A recursive upload command was previously run from a directory outside the project folder, which risked including unrelated files.

The lesson was to verify the working directory and use deliberate file-selection rules before running recursive deployment commands.

### Public Access Configuration

The website required appropriate S3 hosting and access settings to be available to visitors.

I learned that website availability depends on the interaction between hosting configuration, public-access settings, and the bucket policy.

## 4. Security Improvements to Consider

Although the project demonstrates public static website hosting, a production deployment should consider additional protections.

Potential improvements include:

- Serving the site over HTTPS through Amazon CloudFront.
- Keeping the S3 origin private when using CloudFront.
- Reviewing public permissions and removing unnecessary access.
- Avoiding the storage of sensitive customer information in client-side code or public objects.
- Introducing a secure backend and database before processing real bookings.
- Reviewing AWS costs and monitoring usage.

## 5. Future Enhancements

Future iterations could include:

- A custom domain and HTTPS.
- Amazon CloudFront for content delivery.
- A backend API for booking submissions.
- Database storage for reservation records.
- Automated deployment from a version-controlled repository.
- More comprehensive testing and monitoring.

## 6. Skills Developed

- AWS S3 static website hosting.
- AWS CLI and Windows PowerShell.
- Basic cloud access configuration.
- Bucket policies and public-access controls.
- Website deployment and troubleshooting.
- Git and GitHub workflows.
- Technical documentation and security awareness.

## 7. Final Reflection

This project strengthened my understanding of how cloud services can support a small business's digital presence.

It also showed me the importance of validating configurations, managing permissions carefully, testing deployed applications, and documenting technical decisions.

The experience provides a foundation for further learning in AWS, cloud operations, and secure application deployment.

