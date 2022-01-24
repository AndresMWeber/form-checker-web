import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../lib/user";
import { returnError } from "./../../lib/error";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await createUser(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    res.status(500).end(returnError(error));
  }
}
