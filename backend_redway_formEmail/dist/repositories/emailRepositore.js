"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectorRepositoy = void 0;
const data_source_1 = require("../data-source");
const email_entity_1 = require("../entities/email.entity");
const detectorRepositoy = data_source_1.AppDataSource.getRepository(email_entity_1.Email);
exports.detectorRepositoy = detectorRepositoy;
