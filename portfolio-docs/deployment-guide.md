# Deployment Guide — Jozi Haven Bed & Breakfast

## 1. Overview

This guide documents the deployment of the Jozi Haven Bed & Breakfast static website to Amazon S3 using AWS CLI from Windows PowerShell.

The website source files were maintained locally and in GitHub, then uploaded to an S3 bucket configured for static website hosting.

## 2. Prerequisites

- An AWS account with the permissions required to configure Amazon S3.
- AWS CLI installed on the local computer.
- AWS CLI credentials configured for the intended AWS account.
- The website source code available locally.
- Windows PowerShell.
- A GitHub repository for source control.

## 3. Project Directory

The local project directory used was:

```text
C:\Users\miche\Jozi-Haven-Bed-Breakfast
```

The website includes HTML pages, CSS, JavaScript, and image assets.

## 4. Verify AWS CLI Access

Check that AWS CLI is installed:

```powershell
aws --version
```

Verify which AWS identity the CLI is using:

```powershell
aws sts get-caller-identity
```

This helps confirm that commands will run against the intended AWS account.

## 5. Navigate to the Project Directory

Before uploading files, change into the website's project directory:

```powershell
cd C:\Users\miche\Jozi-Haven-Bed-Breakfast
```

Confirm that the expected website files and directories are present:

```powershell
Get-ChildItem
```

Running deployment commands from the correct directory helps avoid uploading unrelated files.

## 6. S3 Bucket Configuration

The deployed website uses:

- **Bucket:** `jozihavenbedbreakfast-static-web-2026`
- **Region:** `us-east-1`

The bucket was configured in the AWS Management Console with static website hosting enabled.

The configuration also included the bucket permissions required for public access to website objects.

## 7. Upload Website Files

From the project root, the AWS CLI `sync` command can upload website files to the bucket:

```powershell
aws s3 sync . s3://jozihavenbedbreakfast-static-web-2026/ --exclude ".git/*" --exclude "portfolio-docs/*" --exclude "policy.json" --exclude "README.md"
```

This example excludes Git metadata, the portfolio documentation, the local bucket policy file, and the root README from the website upload.

**Important:** Run this command only after reviewing the files in the local directory and confirming which files belong on the public website. The exclusion rules should match the actual project structure and deployment requirements.

The `sync` command copies new or changed files and can make the destination match the source for files included by the command. Review deletion options carefully before using them.

## 8. Verify the Deployment

After uploading the files:

1. Open the S3 bucket in the AWS Management Console.
2. Check that the expected HTML pages and supporting assets are present.
3. Open the bucket's static website endpoint.
4. Test the homepage, navigation, images, and styling.
5. Test the booking form's client-side behaviour and inspect the confirmation page.
6. Verify that the custom error page is available.

## 9. Troubleshooting Lessons

### Incorrect working directory

Running an upload command from a directory such as `C:\Users\miche` instead of the project root can include unrelated files.

**Lesson:** Always verify the working directory with `Get-Location` and inspect files with `Get-ChildItem` before uploading.

### AWS CLI authentication errors

An error such as `InvalidClientTokenId` can indicate that the configured AWS credentials or session token are invalid.

**Lesson:** Verify the active identity with `aws sts get-caller-identity` and check the intended credential configuration before retrying deployment.

### Public website access

A successfully uploaded website may still fail to load if static website hosting, public-access settings, or bucket permissions are incorrect.

**Lesson:** Verify each relevant configuration layer and test the actual website endpoint.

## 10. Security and Cost Considerations

- Never upload AWS credentials or secrets to S3 or GitHub.
- Keep public website content separate from private files and configuration.
- Public S3 website endpoints do not provide HTTPS by themselves.
- Review bucket permissions regularly.
- Monitor AWS usage and costs, even when using a Free Tier account.

## 11. Outcome

The deployment process resulted in a working S3-hosted static website. This exercise provided practical experience with AWS CLI, S3 configuration, public object access, deployment validation, and troubleshooting.

