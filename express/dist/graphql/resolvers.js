"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_post_1 = __importDefault(require("../models/model.post"));
const resolvers = {
    Query: {
        getAllPosts: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield model_post_1.default.PostModel.find();
        }),
        getPost: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield model_post_1.default.PostModel.findById(args.id);
        })
    },
    Mutation: {
        createPost: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield model_post_1.default.PostModel.create(args);
        })
    }
};
exports.default = resolvers;
