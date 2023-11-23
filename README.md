# 生成AI時代マーケティング部門エンジニアとしてのNLP/LLM自習

これからのマーケティング部門エンジニアに要求されるスキルは、Python numpy/pandas/matplotlibと自然言語処理NLP/LLMによる非構造化データ処理。テキストデータ、音声データ、画像データ、動画など。NLP/LLMのスキルが必須になる。

また、データ処理結果からコンテンツを半自動生成するプロセスも必要。よって画像処理や3DCG制作のスキルも必須。
https://github.com/araobp/blender-3d でスキル強化中。 

両者を結びつけて生成AI時代のマーケティングオートメーションが成立する。不思議なことに、すべてのツールがPythonによるプログラミングに対応。Pythonはワークフロー自動化のための糊付け言語でもある。

このプロジェクトではNLP/LLMスキル獲得のための自習を行う。

## 要注意

- 生成AIバカにならないこと。生成AIが得意なのは、生成。文章や画像を生成したり要約文を生成したり。適材適所でしかるべき自然言語処理を適用すること。
- 最初は小さなモデルで始めること。段階的に精度を上げていくこと。

## 二つのフレームワーク

- 最初にspaCyを勉強する。学習済みモデルがたくさんあり軽量動作するとのこと。
- 次にTransformersを勉強する。Deep Learningで動作が重いが精度は良いとのこと。

たぶん、私の場合、大半の作業はspaCyで完結するものと予測。

## 英語と日本語

英語と日本語が混在した環境で仕事する関係上、両言語に対応した手法を勉強する。

### spaCy

https://spacy.io/

### Transformers

https://huggingface.co/docs/transformers

### GiNZA

spaCy及びTransformers上で動作する日本語NLP。日本語TokenizerであるSudachiPy採用。

### ChatGPT

数ヶ月使ってみて、生成や要約は得意だけど分類は苦手そう。毎度、出力される結果が異なり、期待しない結果が出力される時も多く、私にとっては使いにくい。ChatGPTはアシスタントとして使うと良い。機械的な自然言語処理には他の手法、出力される結果に一貫性あるものを適用したい。

### ソーシャルネットワーク

spaCyのNLP結果をソーシャルグラフに乗せたい。マーケティングでは、誰が他の誰と繋がっているか、誰が何と繋がっているかが重要。グラフDBといえばneo4jだが、何か軽量動作するものはないか？昔使ったPythonのnetworkxをとりあえず使ってみて感触を掴む。

参考
- [Network of The Witcher | Relationship Extraction & Network Analysis with Spacy & NetworkX](https://youtu.be/fAHkJ_Dhr50)

## 自習のためのNotebook

### spaCy

1. [spaCyでNLPインスタンス生成](spacy.ipynb)

### キーフレーズ抽出

1. [キーフレーズ抽出](key_phrases.ipynb)

### ネガポジ分析

1. [ChatGPTへネガポジコメント生成させChatGPTへネガポジ分析させる。精度がよくないので、他の手法でネガポジ分析させるため、ネガポジコメント文章を出力](./positive_negative.ipynb)

2. spaCy + GiNZA でネガポジ分析

## 購入した教科書

メインの教科書
- [実践 自然言語処理](https://www.oreilly.co.jp/books/9784873119724/)
-- [サンプルコード](https://github.com/oreilly-japan/practical-nlp-ja)

日本語LLMの参考として
- [大規模言語モデル入門](https://gihyo.jp/book/2023/978-4-297-13633-8)

## 学習環境

- MacBook Air 16GBRAMモデル
- Google Colab

## Transformersのモデル保存場所

```
/Users/<username>/.cache/huggingface/hub
```

モデルのサイズが大きいので、用済み後は必要に応じ削除する。

## その他参考

- [Natural Language Processing With Python's NLTK Package](https://realpython.com/nltk-nlp-python/#getting-started-with-pythons-nltk)
- [Python による日本語自然言語処理](https://www.nltk.org/book-jp/ch12.html)
- [感情分析のやり方が7割わかるようになる記事（初心者向け）（ソースコードあり）（GiNZA）](https://qiita.com/Mizuiro__sakura/items/94efccb5ba12046d17b0)
