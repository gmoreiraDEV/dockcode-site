import type { NextApiRequest, NextApiResponse } from "next";

const HandlerSubscribe = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "POST") {
    const { name, email, phone, business, website, employers, description } =
      req.body;

    res
      .status(200)
      .json({ name, email, phone, business, website, employers, description });
  } else {
    res.redirect("/");
  }
};

export default HandlerSubscribe;
