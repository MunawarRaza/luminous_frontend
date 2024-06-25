# codexa_frontend# Frontend

This projects contains the code for the frontend and should work with the backend.

So all requirements needed to run the frontend is just docker and docker-compose.

### Tech Stack
---
- `React`
- `TypeScript`
- `MySQL`
- `Vite`


### Recommended IDE Setup
---
[VSCode](https://code.visualstudio.com/)


### Setting Up Local Development
---
Follow the instructions if you running this for the fist time.


### Docker Network
```bash
docker network create --subnet=172.20.0.0/16 codexa_network
```

### Local Domains
```bash
# Linux
/etc/hosts 
# Mac
/private/etc/hosts
# Windows
c:\Windows\System32\Drivers\etc\hosts

# Add the content below
127.0.0.1 local.codexa.com
127.0.0.1 local-be.codexa.com 
```

### **Local Environment Variables**
Execute this following commands in the project folder
```bash
# Frontend
cp -a ./docker/frontend/.env_backup ./docker/frontend/.env
```


### Starting
```bash
# Use the parameter -d to detach the process from the terminal "docker-compose up -d"
docker-compose up
```

### Accessing
[http://local.esi-codexa.com](http://local.esi-codexa].com/)




### Compile and Minify for Production
```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```


```sh
npm run build
npm run test
```
