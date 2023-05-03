# NPM installs
_express, express-fileupload, axios, nodemon (already installed in this project)_

## File hierarchy

_First layer:_
  - _Files: empty folder to contain images uploaded_
  - _node-modules_
  - _src: all source code (contains the second layer)_
  - _.gitignore_
  - _package-lock.json: node-modules packages_
  - _package.json: scripts and dependencies from packages_
  - _tsconfig.json: typescript preferences_

_Second layer (src):_

  - _index: server's boot up and main configurations for routes and ports_
  - _routes: endpoints to call from http request (contains the third layer)_
  - _middlewares: functions that are applied on specific endpoints (contains the third layer)_

_Third layer (routes):_
  - _users: gets the user (me) and the original http url where it was called_
  - _upload: allows image file uploading_
  - _time: checks current time if authenticated correctly and logged in with a name_
  - _pokemon: retrieves data from a certain pokemon when an Id is provided_

_Third layer (middlewares):_
  - _fileExists: detects if a file was uploaded_
  - _fileExtensionLimiter: limits file upload to only PNG, JPEG or GIF_
  - _fileSaver: saves an uploaded file to /files folder_
  - _routerCache: enables cache-control, no-cache option_
  - _enableCORS: enables Cross-Origin-Resource-Sharing_
  - _authenticate: enables a basic authentication header, limiting access to the request depending on provided user and password_

### Requirements

_Postman or ThunderClient pluggin from VSCode are needed to perform requests to the server_

### Instructions
_npm run dev runs the developer script and starts up the server on the chosen port (any is good to go)_

_server remains up and listens to live updates, then reboots on it's own and starts up again after any change performed if typescript configuration is correct_

_to shut down server the terminal needs to be closed_
