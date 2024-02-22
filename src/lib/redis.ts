import { Redis } from "ioredis";

export const redis = new Redis()

// configurar portas, senhas, etc dentro do vetor de new Redis() caso sejam diferente do padrão