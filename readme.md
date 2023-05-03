# NPM installs
_express, express-fileupload, axios, nodemon (already installed in this project)_

## File hierarchy

_First layer:_
  - _Files: empty folder to contain images uploaded_
  - _node-modules_
  - _src: all source code (contains the second layer)_
  - _.gitignore_
  - _package-lock.json: node-modules packages_
  - _package.json: scripts and dependencies from packages
  - _tsconfig.json: typescript preferences
_Second layer (src):
  - _index: server's boot up and main configurations for routes and ports
  - _routes: endpoints to call from http request (contains the third layer)
  - _middlewares: functions that are applied on specific endpoints (contains the third layer)
_Third layer (routes):
  - _users: gets the user (me) and the original http url where it was called
  - _upload: allows image file uploading
  - _time: checks current time if authenticated correctly and logged in with a name
  - _pokemon: retrieves data from a certain pokemon when an Id is provided
_Third layer (middlewares):
  - _fileExists: detects if a file was uploaded
  - _fileExtensionLimiter: limits file upload to only PNG, JPEG or GIF
  - _fileSaver: saves an uploaded file to /files folder
  - _routerCache: enables cache-control, no-cache option
  - _enableCORS: enables Cross-Origin-Resource-Sharing
  - _authenticate: enables a basic authentication header, limiting access to the request depending on provided user and password

### Requirements

_Postman or ThunderClient pluggin from VSCode are needed to perform requests to the server

### Instructions
_npm run dev runs the developer script and starts up the server on the chosen port (any is good to go)
_server remains up and listens to live updates, then reboots on it's own and starts up again after any change performed if typescript configuration is correct
_to shut down server the terminal needs to be closed
