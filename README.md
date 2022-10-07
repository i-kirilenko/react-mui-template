# react-mui-template

demo: [react-mui-template.sandbox.kirilenko.com](https://react-mui-template.sandbox.kirilenko.com)

---

## Create Firebase CI-Token via CLI

```
npm i -g firebase-tools
firebase login

# Ensure that your .firebaserc links current project:
firebase projects:list

# Create a token:
firebase login:ci
```

## Create Firebase Hosting

on https://console.firebase.google.com:

- `<projectId>` for `master` branch and
- `<projectId>-stage` for `stage` branch
- `<projectId>-dev` for `dev` branch
