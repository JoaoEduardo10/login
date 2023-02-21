import bcrypt from "bcryptjs";

export const cryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(8);

  return await bcrypt.hash(password, salt);
};

export const validatePasswordHash = async (
  password: string,
  passwordHash: string
) => {
  return await bcrypt.compare(password, passwordHash);
};
