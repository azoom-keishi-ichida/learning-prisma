import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 複数userの作成
  // const createUsers = await prisma.user.createMany({
  //   data: [
  //     { name: 'Bob', email: 'bob@prisma.io' },
  //     { name: 'Bobo', email: 'bob@prisma.io' },
  //     { name: 'Yewande', email: 'yewande@prisma.io' },
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
  // const upsertUser = await prisma.user.upsert({
  //   where: {
  //     email: 'viola@prisma.io',
  //   },
  //   update: {
  //     name: 'Viola the Magnificent',
  //   },
  //   create: {
  //     email: 'viola@prisma.io',
  //     name: 'Viola the Magnificent',
  //   },
  // })

  // const createPosts = await prisma.post.createMany({
  //   data: [{ published: true, title: 'POST' }],
  // })

  // インクリメントを行うクエリ
  // const updatePosts = await prisma.post.updateMany({
  //   data: {
  //     views: {
  //       increment: 1,
  //     },
  //     likes: {
  //       increment: 1,
  //     },
  //   },
  // })

  // 1つのデータを削除するdeleteメソッド
  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     email: 'angelique@prisma.io',
  //   },
  // })

  // 複数のデータを一括削除するdeleteManyメソッド
  // const deleteUsers = await prisma.user.deleteMany({
  //   where: {
  //     email: {
  //       contains: 'prisma.io',
  //     },
  //   },
  // })

  //全てのレコードを削除するdeleteメソッド
  // const deleteUsers = await prisma.user.deleteMany({})

  // deleteを行う際に、子モデルのデータを削除することができないのでトランザクションを使って削除
  // const deletePosts = prisma.post.deleteMany({
  //   where: {
  //     authorId: 7,
  //   },
  // })

  // const deleteUser = prisma.user.delete({
  //   where: {
  //     id: 7,
  //   },
  // })
  // const transaction = await prisma.$transaction([deletePosts, deleteUser])
  // MEMO: onDelete: Cascade をschemaに設定することで上の無駄コード無しで関連削除を行なってくれる

  // const u = await prisma.user.create({
  //   include: {
  //     posts: {
  //       include: {
  //         categories: true,
  //       },
  //     },
  //   },
  //   data: {
  //     email: 'emma@prisma.io',
  //     posts: {
  //       create: [
  //         {
  //           title: 'My first post',
  //           categories: {
  //             connectOrCreate: [
  //               {
  //                 create: { name: 'Introductions' },
  //                 where: {
  //                   id: 1,
  //                 },
  //               },
  //               {
  //                 create: { name: 'Social' },
  //                 where: {
  //                   name: 'Social',
  //                   id: 2,
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           title: 'How to make cookies',
  //           categories: {
  //             connectOrCreate: [
  //               {
  //                 create: { name: 'Social' },
  //                 where: {
  //                   name: 'Social',
  //                   id: 1,
  //                 },
  //               },
  //               {
  //                 create: { name: 'Cooking' },
  //                 where: {
  //                   name: 'Cooking',
  //                   id: 2,
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // })

  // メソッドチェーンを使用(こちらの使用はできない)
  // const UserWithCategories = await prisma.post
  //   .findUnique({
  //     where: {
  //       id: 3,
  //     },
  //   })
  //   .categories.findMany({})

  // メソッドチェーンの代替案
  // const UserWithCategories = await prisma.post.findUnique({
  //   where: {
  //     id: 3,
  //   },
  //   include: {
  //     categories: true,
  //   },
  // })

  // コンソールによる確認
  console.dir(UserWithCategories?.categories)
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
