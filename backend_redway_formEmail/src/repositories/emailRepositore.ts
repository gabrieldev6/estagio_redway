import { AppDataSource } from "../data-source";
import { Email } from "../entities/email.entity";

const detectorRepositoy = AppDataSource.getRepository(Email)

export { detectorRepositoy}