# マーケティング部門エンジニアとしてのNLP自習

## 自習途中だがNLP活用への個人的見解

CRM/SFAの限界を感じる。いろいろな意味で、SaaSだと非構造化データをうまく扱えない。技術的な理由、秘密区分上の理由、組織構造上の理由など。

Excelの限界を感じる。テキストデータが沢山入力されているのに、テーブルでのデータ表現だと、数値データ集計してピボットやチャートで表現して終わってしまう。これは、マーケティング部門の内向き作業。それなのに、なぜ、テキストデータ沢山入力するのか？きっと誰かが、将来、テキストデータのところのデータ処理をやってくれると信じているから。信じているだけだと、マーケティング部門の外向き作業に手がついていないに等しい。

マーケティング部門が収集した非構造化データは個人情報や企業秘密を沢山含む。部署外へ公開できないデータ。ローカルPC上でNLP動作させることで、非構造化データの利活用が促進できる。

ローカルPC上で動作するNLP、spaCy や Hugging Face 上の1GB以下NLPモデル。これらを使いこなせれば、これまで手がついていなかった非構造化データの利活用に踏み込める。各部署のデータサイエンティストが、部署特化の非構造化データ利活用を行える。ローカルPCとオープンソース、費用は全くかからない。

注意点は、意味ある結果を得るには、ドメイン固有の特徴量エンジニアリングを注入すること。また、必ず、手作業が発生する。AIのためのアノテーション作業だったりドメイン固有の辞書作成だったり。手間のバランスを見て、AIで行くべきか、辞書で行くべきか考えること。

## 自習のためのNotebook

### replace(), re.sub(), re.match(), re.finditer(), split(), join()

前処理で多用するので勉強しておく。

### pandas

仕事ではCRM/SFA系SaaSからエキスポートされたcsv形式データのデータ分析にpandasを良く使う。pandasは、NLPの処理結果をテーブルとして表現したりチャート化するときにも使われる。

- [Titanicデータセット](etc/Titanic.ipynb)

### NLTK

NLP自習の第１歩、NLP何たるかを知るためNLTKからNLP始めた。しかし、後で、今はAI使ったNLPが主流だと知った。仕事でNLTK使う機会はないが、NLPの勉強始める時はNLTKから始めた方が良い。

- [NLTK Basics](NLTK_Basics.ipynb)

### spaCy

パシフィコ横浜で開催されたEdgeTech+2023展示会でO'Reillyの[実践 自然言語処理](https://www.oreilly.co.jp/books/9784873119724/)を購入。展示会で買うと20%ディスカウントで良い。この本でspaCyの存在を知った。NLP実践のための良書。この本をとかっかりにNLPの勉強を本格的に開始。spaCy、マーケティングの仕事で結構使える。APIがシンプルで良い。認識精度上げたければTransformerモデル使うことも出来る。

spaCyはAPIが綺麗で使いやすい。spaCyの開発者はドイツのベルリン在住者が多い。ドイツらしいシステマティックなAPI？

25年前、私もドイツのベルリンに住んていた。ベルリンってドイツ北東部に位置するので、バッハの音楽を沢山聴いた。プロテスタント教会で聴いたオルガン音楽やクリスマスオラトリオ。Project Gutenbergよりバッハの本からspaCyによるNLPでバッハの人脈図をつくってみた。[Thu Vu](https://www.youtube.com/@Thuvu5)さんのYouTube上動画で勉強しながらつくった。

<img src="spaCy/bach_network.jpg" width=800>

- [spaCyでNLPインスタンス生成](spaCy/spacy.ipynb)
- [spaCy and networkx](spaCy/spaCy_networkx.ipynb)
- [キーフレーズ抽出](spaCy/key_phrases.ipynb)
- [感情分析](spaCy/sentiment.ipynb)
- [何故regexで国名抽出するときにNERで前処理する必要があるか？](spaCy/NER_with_regex.ipynb)

ある程度慣れたら、このコースで網羅的に学習する：[Advanced NLP with spaCy](https://course.spacy.io/en)。add_extension(), nlp.pipe()など、NLP実践時には必須。

ある程度spaCyを実践で使ってみると、NERがとても使えることが分かった。しかし、うまく認識してくれない固有表現も多い。役職名や会社に固有な製品名など。その辺を改善するには、spaCyを再トレーニングする必要あり。ただし、自然言語処理は８０％の精度と言っている人たちが多い。状況によっては、辞書とPhraseMatcherで固有表現抽出の方が精度高くて良いかも。その場合、辞書のメンテナンスが重要になる。

### Transformers

LLMの勉強しようと書籍店で"大規模言語モデル入門"を購入。NLPの知識なく、いきなりこれを理解するのは無理。O'Reillyの"実践 自然言語処理"で勉強してからこの本を読む。これまで実践してきた音声処理や画像処理系AI(DNN/CNN)の経験が役にたちそう。AIって何？学習って何？学習ってすごく面倒で大変！その辺、十分に経験してきたので。

学習済み感情分析モデルがHugging Faceのサイトに沢山あり。マーケティング部門では感情分析がかなり重要。

- [ChatGPTへネガポジコメント生成させChatGPTへネガポジ分析させる。精度がよくないので、他の手法でネガポジ分析させるため、ネガポジコメント文章を出力](./transformers/positive_negative.ipynb)
- [Tranformersでネガポジ分析など基本処理](transformers/TransformersBasics.ipynb)

### Tools

マーケティング部門にある非構造化データといえば、エクセルの顧客コメント資料、パワポやPDFの資料、そして、画像や動画コンテンツ。これらをAIで分析すれば有用な何かが得られるはず。

- [PowerPointとPDFからデータ抽出](tools/ppt_pdf.ipynb)

---

### spaCy

NLP開発環境 & NLPライブラリ

https://spacy.io/

### Transformers

NLP開発環境 & NLPライブラリ

https://huggingface.co/docs/transformers

### GiNZA

spaCy及びTransformers上で動作する日本語NLP。日本語TokenizerであるSudachiPy採用。

https://megagonlabs.github.io/ginza/

### ChatGPT

数ヶ月使ってみて、生成や要約は得意だけど分類は苦手そう。毎度、出力される結果が異なり、期待しない結果が出力される時も多く、私にとっては使いにくい。ChatGPTはアシスタントとして使うと良い。機械的な自然言語処理には他の手法、出力される結果に一貫性あるものを適用したい。

### ソーシャルネットワーク

spaCyのNLP結果をソーシャルグラフに乗せたい。マーケティングでは、誰が他の誰と繋がっているか、誰が何と繋がっているかが重要。グラフDBといえばneo4jだが、何か軽量動作するものはないか？昔使ったPythonのnetworkxをとりあえず使ってみて感触を掴む。

参考
- [Network of The Witcher | Relationship Extraction & Network Analysis with Spacy & NetworkX](https://youtu.be/fAHkJ_Dhr50)
- [How to create an Undirected Graph using Python](https://youtu.be/rldKl1CNx-A)
  
## 購入した教科書

NLP教科書
- [実践 自然言語処理](https://www.oreilly.co.jp/books/9784873119724/)
-- [サンプルコード](https://github.com/oreilly-japan/practical-nlp-ja)

日本語LLMの参考として
- [大規模言語モデル入門](https://gihyo.jp/book/2023/978-4-297-13633-8)

## 学習/実行環境

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
- [How should I preprocess text for spaCy?](https://github.com/explosion/spaCy/discussions/10243)
- [seabornで日本語が文字化けする時の対処](https://kiseno-log.com/2021/03/13/seaborn%E3%81%A7%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%8C%E6%96%87%E5%AD%97%E5%8C%96%E3%81%91%E3%81%99%E3%82%8B%E6%99%82%E3%81%AE%E5%AF%BE%E5%87%A6/)
- [NER graphs](https://medium.com/@anoopjohny2000/ner-graphs-e79fb5247a95)
- [Knowledge Graph — A Powerful Data Science Technique to Mine Information from Text (with Python code)](https://prateekjoshi.medium.com/knowledge-graph-a-powerful-data-science-technique-to-mine-information-from-text-with-python-f8bfd217accc)
