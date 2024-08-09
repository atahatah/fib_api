[![CI](https://github.com/atahatah/fib_api/actions/workflows/mail.yml/badge.svg)](https://github.com/atahatah/fib_api/actions/workflows/mail.yml)

# FIB_API
n番目のフィボナッチ数列を返すAPIです。

## 仕様
### 技術スタック
- Next.js
- TypeScript
### テスト
`Jest`を用いてユニットテストを作成しています。
### TODO: エラーハンドリング
### 公開
Vercelを用いて公開しており、https://fib-api-pearl.vercel.app/fib?n=99 のように利用することが可能です。

## 実行方法
### ローカルサーバの起動
まずはローカルにクローンします。
```sh
git clone git@github.com:atahatah/fib_api.git
```
次に依存するパッケージをインストールしますが、`Node.js`のバージョン管理に`asdf`を用いている場合、`Node.js`のバージョンも合わせることができます。
```sh
cd fib_api
npm install
```
最後に次のコマンドでローカルでサーバーを起動することができます。
```sh
npm run dev
```
### 利用方法
以下はVercelを用いた場合のAPIの利用方法を記述します。ローカルサーバを用いる場合は、`https://fib-api-pearl.vercel.app`を適宜読み替えてください。

フィボナッチ数列を受け取るAPIは`GET`メソッドを用い、パスが`/fib`で、要素の番号の指定を`n`というパラメーターを用いて行います。ただし、`n>=1`としてください。例えば、次のように利用することができます。
```
https://fib-api-pearl.vercel.app/fib?n=99 
```
この例の場合、次のようなレスポンスが期待されます。
```
{"result": 218922995834555169026}
```
`curl`コマンドを用いる場合は次のように利用できます。
```sh
curl -X GET -H "Content-Type: application/json" "https://fib-api-pearl.vercel.app/fib?n=99"
```

## ソースコードの構成
- `__tests__` ユニットテスト
- `.github/workflows` CI
- `src` プログラム
  - `app` APIハンドル
    - `fib` フィボナッチ数列のAPI
  - `features` それぞれの機能ごとの実装
    - `fib` フィボナッチ数列の実際の処理
  - `libs` ライブラリに関連するプログラム
    - `errors.ts` エラー定義