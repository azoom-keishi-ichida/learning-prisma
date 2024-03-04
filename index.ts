import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 複数userの作成
  // const createUsers = await prisma.user.createMany({
  //   data: [
  //     { name: 'Bob', email: 'bob@prisma.io' },
  //     { name: 'Bobo', email: 'bob@prisma.io' },
  //     { name: 'Yewande', email: 'yewande@prisma.io'},
  //     { name: 'Angelique', email: 'angelique@prisma.io' },
  //   ],
  //   skipDuplicates: true, // Skip 'Bobo'
  // })

  // id指定による取得
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })

  // 複数件取得
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })

  // 全てのuserを取得
  // const users = await prisma.user.findMany()

  // 特定userの検索
  // const findUser = await prisma.user.findFirst({
  //   orderBy: {
  //     id: 'desc',
  //   },
  // })

  //末尾の文字でフィルタリング
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       endsWith: 'prisma.io',
  //     },
  //   },
  // })

  // 指定されたidを取得する
  // const getUser = await prisma.user.findMany({
  //   where: {
  //     id: { in: [22, 91, 14, 2, 5] },
  //   },
  // })

  // //  複数条件のデータを取得する
  // const getUser = await prisma.user.findMany({
  //   where: {
  //     name: { in: ['Saqui', 'Clementine', 'Bob'] },
  //   },
  // })

  // //  nameに該当しない結果を取得する
  // const getUser = await prisma.user.findMany({
  //   where: {
  //     NOT: {
  //       name: { in: ['Saqui', 'Clementine', 'Bob'] },
  //     },
  //   },
  // })

  // emailのupdate 
  // const updateUser = await prisma.user.update({
  //   where: {
  //     email: 'viola@prisma.io',
  //   },
  //   data: {
  //     name: 'Viola the Magnificent',
  //   },
  // })

  // 該当するemailアドレス全てのUserのrおleをupdateする
  // const updateUsers = await prisma.user.updateMany({
  //   where: {
  //     email: {
  //       contains: 'prisma.io',
  //     },
  //   },
  //   data: {
  //     role: 'ADMIN',
  //   },
  // })

  // whereでデータが存在すればupdateを存在しなければクリエイトを行う
  const upsertUser = await prisma.user.upsert({
    where: {
      email: 'viola@prisma.io',
    },
    update: {
      name: 'Viola the Magnificent',
    },
    create: {
      email: 'viola@prisma.io',
      name: 'Viola the Magnificent',
    },
  })

  // コンソールによる確認
  console.dir(upsertUser)
}

// mainメソッドの実行とエラーの出力
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })