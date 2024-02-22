import { FastifyInstance } from "fastify"
import { randomUUID } from "crypto"
import { z } from "zod"

export async function voteOnPoll(app: FastifyInstance) {
  app.post("/polls/:poolId/votes", async (request, reply) => {
    const voteOnPollBody = z.object({
      pollOptionId: z.string().uuid(),
    })

    const voteOnPollParams = z.object({
      pollId: z.string().uuid(),
    })

    const { pollId } = voteOnPollParams.parse(request.params)
    const { pollOptionId } = voteOnPollBody.parse(request.body)

    const sessionId = randomUUID()

    reply.headers

    return reply.status(201).send()
  })
}
