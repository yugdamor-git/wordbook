import { prisma } from "../../../lib/db";

export default async function handler(req,res)
{
    if (req.method == "GET")
    {
       const meanings = await prisma.meanings.findMany({})

       res.status(200).json({"data":meanings})

    }

    else if (req.method == "POST")
    {
        const meaning = JSON.parse(req.body)

        const savedMeaning = await prisma.meanings.create({
            data:meaning
        })

        res.status(200).json({"data":savedMeaning})
    }

    else
    {
        res.status(405).json({"message":"request not allowed"})
    }
}