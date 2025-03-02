import { Router, Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    //   console.log(req.body);
    const { firstName, lastName } = req.body;
    // throw new Error("Un error ha ocurrido!");

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;

    await user.save();

    //   console.log(user);

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    // throw new Error("Bad request!");

    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findOneBy({ id: parseInt(req.params.id) });

    // Guard
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // const { firstName, lastName } = req.body;

    // Con Save
    // user.firstName = firstName;
    // user.lastName = lastName;
    // user.save();

    // Con Update
    await User.update(
      { id: parseInt(req.params.id) },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }
    );

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.sendStatus(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const result = await User.delete({ id: parseInt(id) });
    console.log(result);

    if (result.affected === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.sendStatus(500).json({ message: error.message });
    }
  }
};

export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const user = await User.findOneBy({ id: parseInt(id) });

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.sendStatus(500).json({ message: error.message });
    }
  }
};
