import { getGptReply } from '../openai/index.js'

// 测试 open ai api
async function testMessage() {
  const message = await getGptReply("hello")
  console.log('🌸🌸🌸 / message: ', message)
}

testMessage()