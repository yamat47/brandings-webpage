ブランディングスのホームページ
============================

認証情報
-----------------------

### 色々使っているGmailアカウント

* ユーザー名: `brandings.manage`
* パスワード: `FwbAYxHNHZFioXeMxUBcJTys`

### AWSのrootユーザー

* メールアドレス: `brandings.manage@gmail.com`
* パスワード: `hsdH#jv[^kyVy^cxq];ThQ$)`

### IAMの認証情報

AWSから確認する。わからなくなったら改めてIAMユーザーを発行すれば大丈夫。

更新方法
-------------------------

```
git checkout master
git pull
yarn build
cd dist
aws s3 sync . s3://brandings-webpage --profile={{ AWS CLIで登録したprofile }}
```
