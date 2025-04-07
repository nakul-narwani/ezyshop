// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("DB Connected 🦾🤷‍♂️");
//   });

//   await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce_ezyshop`);
// };

// export default connectDB;


import mongoose from "mongoose"

const connectDB = async () => {


	await mongoose.connect(process.env.MONGODB_URI).then((data) => {
		console.log(process.env.MONGODB_URI)
		console.log(`Connected with DB ${data}`)
	})
}

export default connectDB