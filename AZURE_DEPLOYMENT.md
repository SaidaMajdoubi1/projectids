# Azure App Service Deployment Guide

## Prerequisites

1. **Azure Account** - Create one at https://azure.microsoft.com
2. **Azure CLI** - Install from https://learn.microsoft.com/en-us/cli/azure/install-azure-cli
3. **GitHub Repository** - Already set up

## Step 1: Create Azure Resources

### Option A: Using Azure Portal (Easy)

1. Go to https://portal.azure.com
2. Click "Create a resource" → "App Service"
3. Fill in:
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new (e.g., "techcool-rg")
   - **Name**: `techcool-app` (must be globally unique)
   - **Publish**: Code
   - **Runtime stack**: Node 18 LTS
   - **Operating System**: Linux
   - **Region**: Choose closest to you
4. Click "Review + create" → "Create"

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create \
  --name techcool-rg \
  --location eastus

# Create App Service Plan
az appservice plan create \
  --name techcool-plan \
  --resource-group techcool-rg \
  --sku B1 \
  --is-linux

# Create Web App
az webapp create \
  --name techcool-app \
  --resource-group techcool-rg \
  --plan techcool-plan \
  --runtime "node|18-lts"
```

## Step 2: Generate Deployment Credentials

```bash
# Get the deployment credentials
az webapp deployment list-publishing-credentials \
  --name techcool-app \
  --resource-group techcool-rg \
  --query "{username:publishingUserName, password:publishingPassword}" \
  --output json
```

## Step 3: Create GitHub Secret

### AZURE_CREDENTIALS (Recommended - RBAC Method)

```bash
# Get your subscription ID
az account show --query id --output tsv

# Create a service principal
az ad sp create-for-rbac \
  --name techcool-deployer \
  --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/techcool-rg \
  --json-auth
```

Copy the output and add it to GitHub:

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `AZURE_CREDENTIALS`
5. Paste the JSON from the service principal output
6. Click "Add secret"

## Step 4: Update Workflow Variables

Edit `.github/workflows/azure-deploy.yml`:

```yaml
env:
  AZURE_WEBAPP_NAME: 'techcool-app'  # Your App Service name
  AZURE_WEBAPP_PACKAGE_PATH: 'dist'
  NODE_VERSION: '18.x'
```

## Step 5: Deploy

Simply push to main branch:

```bash
git add .
git commit -m "Add Azure App Service deployment"
git push origin main
```

The workflow will automatically:
1. ✅ Build your React app
2. ✅ Deploy to Azure App Service
3. ✅ Make it available at: `https://techcool-app.azurewebsites.net`

## Monitoring Deployment

1. Go to GitHub repository → Actions tab
2. Watch the "Build and Deploy to Azure App Service" workflow
3. Check logs for any issues

## View Your App

- **URL**: `https://techcool-app.azurewebsites.net`
- **Azure Portal**: https://portal.azure.com → App Services → techcool-app

## Environment Configuration

To add environment-specific settings:

1. Go to Azure Portal → techcool-app → Configuration
2. Click "New application setting"
3. Add key-value pairs as needed

## Scaling

To scale up your App Service Plan:

1. Azure Portal → techcool-app → Scale up (App Service plan)
2. Choose a higher tier (B2, S1, etc.)
3. Click "Select"

## Troubleshooting

### Deployment Failed
- Check GitHub Actions logs for errors
- Verify `AZURE_CREDENTIALS` secret is valid
- Ensure App Service name matches in workflow

### App Not Loading
- Check Azure Portal → Diagnose and solve problems
- Review Application logs
- Verify `web.config` is deployed correctly

### 404 Errors
- The `web.config` handles SPA routing
- Make sure it's included in deployment

## Cost

Azure App Service pricing (B1 plan):
- ~$12-15/month for basic tier
- Free tier available (limited)
- Always monitor usage in Azure Portal

## Security Best Practices

1. ✅ Use RBAC (service principal) instead of publish profile
2. ✅ Rotate credentials regularly
3. ✅ Enable authentication/authorization if needed
4. ✅ Use HTTPS only (enabled by default)
5. ✅ Keep Node.js runtime updated

## Support

- Azure Documentation: https://learn.microsoft.com/en-us/azure/app-service/
- GitHub Actions: https://github.com/azure/webapps-deploy
