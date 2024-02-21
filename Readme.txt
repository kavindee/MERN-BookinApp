DB - Mongodb
REACT - Frontend
Nodejs- Server side code
Js
API - Data fetch
TAILWIND - for Styly css
React Query
Cloudinary
Stripe
React Hook Form


1. Backend-cd backend
npm i express cors dotenv mongodb mongoose
npm i @types/cors @types/express @types/node ts-node typescript nodemon --save-dev

then create index.ts file and implement

2. fronted - go to root
npm create vite@latest
	-Enter "y"
	-Enter Project name "frontend"
	-Select "React"
	-Select "TypeScript + SWC"
Done. Now run:

  cd frontend
  npm install
  npm run dev

3. Mongodb
Go to Mongodb site ->Create new project "Development"
Go to Database-> Clikc "Build a Database"
	-Select Free option
	-Provider "aws" 
	-Region "Mumbai"
	-Cluster name "mern-bookingapp-db"
Then it will go to Data services page,
	-Username "admin"
	-copy the autogenarated password & keep it (tKPlY0wMdZ5YOs5w)
	-Select "My Local Environment"
	-Select "Add my current IP address"
Then it will go to overview
->Database
Select "Connect" -> Drivers
			-Copy the 3rd url code string
Go back to code->backend
		-Create a new file ".env"
		-Replace password "vBh6nVSyaIy8Kdfy" with <password>

4.Tailwind CSS
	- cd frontend
	- npm install -D tailwindcss postcss autoprefixer
	- npx tailwindcss init -p
		it will Created Tailwind CSS config file: tailwind.config.js
			Created PostCSS config file: postcss.config.js
	- Go to "tailwind.config.js"
	- Delete "App.css"
	- Go to "index.css" and clear all
5. Adding layout
	- create "layouts" folder in src folder
	- create "Layout.tsx" file inside that folder
	- create "components" folder in src folder
	- create "Header.tsx" file inside that folder
	- go to "App.tsx"
	- create "Hero.tsx" file inside the components folder
	- create "Footer.tsx" file inside the components folder

6. Login & Registration
	* User Registration API
		- first we goes to backend -> src -> create "models" folder
		- create "user.ts"
		- Then, Create a "routes" folder in src folder
		- create "users.ts"
		- now we need to set up encrypt password and token for authentication, for that we need to install libraries
		- npm i bcryptjs jsonwebtoken
		- npm i @types/bcryptjs @types/jsonwebtoken --save-dev
		- now instal for validators
		- npm i express-validator
	* User Login API
		- first we goes to backend -> src -> routes and create a file name "auth.ts"
		- after implement in auth.ts we goes to "index.ts"

7. User Registration Form
	- go to frontend -> src -> create "pages" folder
	- in "pages" folder create "Register.tsx" file
	- go to app.js and give the path
	- npm i react-hook-form
	- goes to "tailwind.config.js" to change the padding settings as "padding: { md: "10rem" }"
	- go to src-> create "api-client.ts" file
	- in frontend folder create ".env" file
	- npm i react-query
	- go to "main.tsx" file
	- when "Unexpected token 'O', "OK" is not valid JSON" comes up,
	- go to backend-> src-> ->routes ->users.ts

8. AppContext & Toast Notification
	- create a "contexts" folder in frontend-> src
	- create a file called "AppContext.tsx' in that contexts folder
	- go to "main.tsx" file
	- create file in frontend-> src-> components "Toast.tsx"
	- go to "AppContext.tsx"

9. Checking User Login State
	- go to frontend-> src-> api-client.ts
	- go to backend-> src-> index.ts
	- go to backend-> .env
	- go to backend-> src-> routes-> auth.ts
	- create a "middleware" folder in backend-> src
	- create a file "auth.ts" in middleware folder
	- in backend, 
	- npm i cookie-parser
	- go to index.ts
	- npm i --save-dev @types/cookie-parser
	- go to frontend-> src-> contexts-> AppContext.tsx
10. Sign-in & Sing-out
	- Go to backend-> src-> routes-> auth.ts
	- Create a file "SignIn.tsx" in frontend-> src-> pages
	


