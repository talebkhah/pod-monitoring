# pod-monitoring

A react component for the Pod monitoring projects

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
  const apiAddress = 'https://your-project-api-address.ir/status';

  return (
    <MonitoringHealthCheck apiAddress={apiAddress}>
  );
}
```

### Step By Step Guid

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
  const apiAddress = 'https://your-project-api-address.ir/status';

  return (
    <MonitoringHealthCheck apiAddress={apiAddress}>
  );
}
```
<br>

That's it. It's all of things that you should be done.
<br>

### Notice:
- Don't insert any content in the monitoring page.
- Use a public web service for monitoring.
- Delay time for seeing content is atleast 100 miliseconds.
- If your front app and backend service will be up, you should see `frontend:successed,backend:successed`

<br>

## LICENSE

MIT
