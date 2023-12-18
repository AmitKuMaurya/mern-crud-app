import express, { Request, Response, NextFunction, Application } from "express";
import { DB_Connection } from "./config/db";
import ClientModel, { ClientI } from "./model/client.model";

import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.get("/clients", async (req: Request, res: Response) => {
  const client = await ClientModel.find();
  res.status(200).send(client);
});

app.post("/create", async (req: Request, res: Response) => {
  const { email, firstName, lastName, mobileNumber, project }: ClientI = req.body;

  const create = await ClientModel.create({
    email,
    firstName,
    lastName,
    mobileNumber,
    project,
  });

  res.status(201).send({ msg: "Todo got created !", create });
});

app.patch("/update/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id: ", id);
  const { email, firstName, lastName, mobileNumber, project }: ClientI = req.body;
  const findClientId = await ClientModel.findOne({ _id: id });
  if (!findClientId) throw new Error("Client Doesn;t Exist in Database!");
  
  const update = await ClientModel.updateOne(
    { _id: id },
    {
      $set: { firstName, lastName, email, mobileNumber, project },
    }
    );
    
    res.send({ msg: "Client Updated !", todo: update });
  });
  
  app.delete("/delete/:id", async (req : Request, res : Response) => {
    const { id } = req.params;

    const findClientId = await ClientModel.findOne({ _id: id });
    if (!findClientId) throw new Error("Client Doesn;t Exist in Database!");

    const deleteClient = await ClientModel.deleteOne({_id : id});

    res.send({ msg : "Todo Deleted !", deleteClient});
    
  });

app.listen(PORT, async () => {
  await DB_Connection;
  console.log(`Lintening on ${PORT}`);
});
