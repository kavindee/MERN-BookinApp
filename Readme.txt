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
	-copy the autogenarated password & keep it (vBh6nVSyaIy8Kdfy)
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




