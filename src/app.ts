import express from "express"
import cors from "cors"
import productRoutes from "./routes/product.routes";
import purchaseRoutes from "./routes/purchase.routes";
import userRoutes from "./routes/user.routes";
import rolesRoutes from "./routes/role.routes";

const app = express()

app.use(cors())
app.use(express.json())

app.use(productRoutes)
app.use(purchaseRoutes)
app.use(userRoutes)
app.use(rolesRoutes)

export default app;