# pod-monitoring

A React component for the Pod projects monitoring

## Installation

Use npm to install the package:

```
npm i pod-monitoring
```

<br>
<br>

## Usage

### Summary

```jsx
import MonitoringHealthCheck from 'pod-monitoring';

function MonitoringPage() {
  const yourApiAddress = 'https://your-project-api-address.ir/status';

  return (
    <MonitoringHealthCheck apiAddress={yourApiAddress}>
  );
}
```

### Step By Step Guide

First, create a page as a monitoring
```jsx
// ...
  <Route path="/monitoring" component={MonitoringPage} />
// ...
```
<br>

Second, in the MonitoringPage component, import MonitoringHealthCheck from pod-monitoring.
```jsx
import MonitoringHealthCheck from 'pod-monitoring';

function MonitoringPage() {
  const yourApiAddress = 'https://your-project-api-address.ir/status';

  return (
    <MonitoringHealthCheck apiAddress={yourApiAddress}>
  );
}
```
<br>

That's it. It's all the things that you should be done.
<br>

### Notice:
- Don't insert any content in the monitoring page.
- Use a public web service for monitoring.
- Use a public route in your front app.
- The maximum delay time for viewing content is 100 milliseconds.
- If your front app and backend service is up, you should see `frontend:successed,backend:successed`

<br>

## LICENSE

MIT
