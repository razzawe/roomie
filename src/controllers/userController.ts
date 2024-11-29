import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  const { id } = req.query;

  const user = await prisma.userProfile.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      preferences: true,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user })
};

export const createUser = async (req, res) => {
    const { firstName, lastName, profileImage, city, province_state, country } = req.body;

    if (!firstName || !lastName || !city || !country) {
        return res.status(400).json({ message: 'First name, last name, city, and country are required.' });
    }

    const newUserProfile = await prisma.userProfile.create({
        data: {
            firstName, lastName, profileImage, city, province_state, country, gender
        }
        
    })
    return res.status(200).json(newUserProfile)
}

export const getUsers = async (req, res) => {
    const users = await prisma.userProfile.findMany({   
        include: {
            preferences: true
        }
    })
    return res.status(200).json({users})
}
export const createUserPreference = async (req, res) => {
    const { gender, hobbies, description, userId} = req.body;
    const userPref = await prisma.userPreference.create({
        data: { gender, hobbies, description, userId }
    })
    return res.status(200).json({userPref})
}

export const getUserPreference = async (req, res) => {
    const { userId } = req.query;
    const userPrefs = await prisma.userPreference.findUnique({
        where: {
            userId: parseInt(userId)
        }
    })
    return res.status(200).json(userPrefs)
}