import { prisma } from "../../../lib/db.js";


export default async function handler(req, res) {

    if (req.method == "GET")
    {

        const words = await prisma.words.findMany()
        res.status(200).json({ data: words })
    }
    else if(req.method == "POST")
    {
        const word = JSON.parse(req.body)

        const savedWord = await prisma.words.create({
            data:word
        })

        res.status(200).json({"data":savedWord})
    }
    else
    {
        res.status(405).json({"message":"method not allowed"})
    }

  }

