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
  // フィルターしたデータを出力
  // const result = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       endsWith: 'prisma.io',
  //     },
  //     posts: {
  //       some: {
  //         published: true,
  //       },
  //     },
  //   },
  //   include: {
  //     posts: {
  //       where: {
  //         published: true,
  //       },
  //     },
  //   },
  // })
  // フィルタリングの条件変更
  // const result = await prisma.user.findMany({
  //   where: {
  //     OR: [
  //       {
  //         email: {
  //           endsWith: 'prisma.io',
  //         },
  //       },
  //       { email: { endsWith: 'gmail.com' } },
  //     ],
  //     NOT: {
  //       email: {
  //         endsWith: 'hotmail.com',
  //       },
  //     },
  //   },
  //   // 指定したカラムのみを取得（trueにすると指定になる）
  // MEMO: selectとincludeを併用することはできない
  //   select: {
  //     email: true,
  //   },
  // })
  // nullをフィルタリング
  // const posts = await prisma.post.findMany({
  //   where: {
  //     content: null,
  //   },
  // })
  // 　このデータの条件をもとに該当する親の情報を持ってくる
  // const result = await prisma.user.findMany({
  //   where: {
  //     posts: {
  //       some: {
  //         views: {
  //           gt: 10,
  //         },
  //       },
  //     },
  //   },
  // })
  // ソートを行う
  // const orderPost = await prisma.post.findMany({
  //   orderBy: {
  //     id: 'desc',
  //   },
  // })
  // userに関連するpostのカウントでソートしている
  // const getActiveUsers = await prisma.user.findMany({
  //   orderBy: {
  //     posts: {
  //       _count: 'desc',
  //     },
  //   },
  // })
  //上位10このデータだけを取得し、postの数でソートを行う
  // const getActiveUsers = await prisma.user.findMany({
  //   take: 10,
  //   orderBy: {
  //     posts: {
  //       _count: 'desc',
  //     },
  //   },
  // })
  // postのupdatedAtでソートを行い、nullを一番最後に持ってくる
  // const posts = await prisma.post.findMany({
  //   orderBy: {
  //     updatedAt: { sort: 'asc', nulls: 'last' },
  //   },
  // })
  // const users = await prisma.user.findMany({
  //   relationLoadStrategy: 'join', // or 'query'
  //   include: {
  //     posts: true,
  //   },
  // })
  //  二段階のネストされたJSONを作成する
  // const user = await prisma.user.findFirst({
  //   include: {
  //     posts: {
  //       include: {
  //         categories: true,
  //       },
  //     },
  //   },
  // })
  // セレクトを使ったネストされた情報の取得
  // const user = await prisma.user.findFirst({
  //   select: {
  //     name: true,
  //     posts: {
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // })
  // 関係するリレーションの数を出力
  // const relationCount = await prisma.user.findMany({
  //   include: {
  //     _count: {
  //       select: { posts: true },
  //     },
  //   },
  // })
  // リレーションのリストをフィルタリングして並べ替えて出力
  // const result = await prisma.user.findFirst({
  //   select: {
  //     posts: {
  //       where: {
  //         published: true,
  //       },
  //       orderBy: {
  //         title: 'asc',
  //       },
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // })
  // 親データと子データを一括で作成する
  // const result = await prisma.user.create({
  //   data: {
  //     email: 'elsa@prisma.io',
  //     name: 'Elsa Prisma',
  //     posts: {
  //       create: [{ title: 'How to make an omelette' }, { title: 'How to eat an omelette' }],
  //     },
  //   },
  //   include: {
  //     posts: true, // Include all posts in the returned object
  //   },
  // })
  // 　リレーションを貼る、この場合はuserも作成してしまう
  // const result = await prisma.user.create({
  //   data: {
  //     email: 'vlad@prisma.io',
  //     posts: {
  //       connect: [{ id: 8 }, { id: 9 }, { id: 10 }],
  //     },
  //   },
  //   include: {
  //     posts: true, // Include all posts in the returned object
  //   },
  // })
  // 先に、postを作成してからuserを作成・コネクトする
  // const result = await prisma.post.create({
  //   data: {
  //     title: 'How to make croissants',
  //     author: {
  //       connectOrCreate: {
  //         where: {
  //           email: 'viola@prisma.io',
  //         },
  //         create: {
  //           email: 'viola@prisma.io',
  //           name: 'Viola',
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     author: true,
  //   },
  // })
  // リレーションを外す(disconnect)
  //   const result = await prisma.user.update({
  //     where: {
  //       id: 24,
  //     },
  //     data: {
  //       posts: {
  //         disconnect: { id: 7 },
  //       },
  //     },
  //     include: {
  //       posts: true,
  //     },
  //   })
  //   // コンソールによる確認
  //   console.dir(result)
  // }
  // このリレーションを全て解除する
  // const result = await prisma.user.update({
  //   where: {
  //     id: 16,
  //   },
  //   data: {
  //     posts: {
  //       set: [],
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // })
  // このリレーションを貼っているデータを全て削除する
  // const result = await prisma.user.update({
  //   where: {
  //     id: 11,
  //   },
  //   data: {
  //     posts: {
  //       deleteMany: {},
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // })
  // 関連するデータ全てを更新する
  // const result = await prisma.user.update({
  //   where: {
  //     id: 6,
  //   },
  //   data: {
  //     posts: {
  //       updateMany: {
  //         where: {
  //           published: true,
  //         },
  //         data: {
  //           published: false,
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // })

  // 親とリレーションが貼られていないものを出力
  // const postsWithNoAuthor = await prisma.post.findMany({
  //   where: {
  //     author: null, // or author: { }
  //   },
  //   include: {
  //     author: true,
  //   },
  // })

  // チェインメソッドみたいに書く方法
  const postsByUser = await prisma.user.findUnique({ where: { id: 22 } }).posts()

  // ログの出力
  console.dir(postsByUser)
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
