var nodes = [{'key': 'Johann Michael Bach', 'attributes': {'value': 3, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann Bernhard Bach', 'attributes': {'value': 3, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann Christoph Bach', 'attributes': {'value': 12, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 12, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann Sebastian Bach', 'attributes': {'value': 40, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Ambrosius Bach', 'attributes': {'value': 2, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Bruhns', 'attributes': {'value': 11, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Fischer', 'attributes': {'value': 11, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Buxtehude', 'attributes': {'value': 11, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Böhm', 'attributes': {'value': 11, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Froberger', 'attributes': {'value': 11, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Johann Caspar Kerl', 'attributes': {'value': 8, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Pachelbel', 'attributes': {'value': 11, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Handel', 'attributes': {'value': 5, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Couperin', 'attributes': {'value': 2, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Wilhelm Friedemann Bach', 'attributes': {'value': 10, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann Gottlieb Görner', 'attributes': {'value': 3, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Görner', 'attributes': {'value': 3, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Georg Philipp Telemann', 'attributes': {'value': 3, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Anna Magdalena Bach', 'attributes': {'value': 6, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann Heinrich Ernesti', 'attributes': {'value': 1, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Matthias Gesner', 'attributes': {'value': 1, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Maria Amalia', 'attributes': {'value': 2, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Müller', 'attributes': {'value': 2, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Abraham Birnbaum', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Marianne von Ziegler', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'J. C. Gottsched', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Christian Hoffmann', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Haussmann', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Elias Gottlieb Haussmann', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Fritz Volbach', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Peters', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Beethoven', 'attributes': {'value': 6, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Regine Susanna Bach', 'attributes': {'value': 6, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann Christoph Friedrich', 'attributes': {'value': 6, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Kerl', 'attributes': {'value': 9, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Vivaldi', 'attributes': {'value': 9, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Frescobaldi', 'attributes': {'value': 9, 'group': 1, 'color': '#fbb4ae'}}, {'key': 'Kühnel', 'attributes': {'value': 2, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Hoffmeister', 'attributes': {'value': 2, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Reinhard Keiser', 'attributes': {'value': 4, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Hasse', 'attributes': {'value': 4, 'group': 2, 'color': '#fed9a6'}}, {'key': 'Johann G. Schübler', 'attributes': {'value': 3, 'group': 2, 'color': '#fed9a6'}}];

var edges = [{'key': 'Johann Michael Bach:Johann Bernhard Bach', 'source': 'Johann Michael Bach', 'target': 'Johann Bernhard Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Michael Bach:Johann Christoph Bach', 'source': 'Johann Michael Bach', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Michael Bach:Carl Philipp Emanuel Bach', 'source': 'Johann Michael Bach', 'target': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Bernhard Bach:Johann Christoph Bach', 'source': 'Johann Bernhard Bach', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Bernhard Bach:Carl Philipp Emanuel Bach', 'source': 'Johann Bernhard Bach', 'target': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Carl Philipp Emanuel Bach', 'source': 'Johann Christoph Bach', 'target': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Johann Sebastian Bach', 'source': 'Johann Christoph Bach', 'target': 'Johann Sebastian Bach', 'attributes': {'value': 2.0}}, {'key': 'Johann Christoph Bach:Johann Ambrosius Bach', 'source': 'Johann Christoph Bach', 'target': 'Johann Ambrosius Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Bruhns', 'source': 'Johann Christoph Bach', 'target': 'Bruhns', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Fischer', 'source': 'Johann Christoph Bach', 'target': 'Fischer', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Buxtehude', 'source': 'Johann Christoph Bach', 'target': 'Buxtehude', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Böhm', 'source': 'Johann Christoph Bach', 'target': 'Böhm', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Froberger', 'source': 'Johann Christoph Bach', 'target': 'Froberger', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Johann Caspar Kerl', 'source': 'Johann Christoph Bach', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 1.0}}, {'key': 'Johann Christoph Bach:Pachelbel', 'source': 'Johann Christoph Bach', 'target': 'Pachelbel', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Johann Sebastian Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Sebastian Bach', 'attributes': {'value': 8.0}}, {'key': 'Carl Philipp Emanuel Bach:Wilhelm Friedemann Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 4.0}}, {'key': 'Carl Philipp Emanuel Bach:Beethoven', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Beethoven', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Regine Susanna Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Anna Magdalena Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Anna Magdalena Bach', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Johann Christoph Friedrich', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Couperin', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Couperin', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Handel', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Handel', 'attributes': {'value': 1.0}}, {'key': 'Carl Philipp Emanuel Bach:Johann G. Schübler', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann G. Schübler', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Johann Ambrosius Bach', 'source': 'Johann Sebastian Bach', 'target': 'Johann Ambrosius Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Bruhns', 'source': 'Johann Sebastian Bach', 'target': 'Bruhns', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Fischer', 'source': 'Johann Sebastian Bach', 'target': 'Fischer', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Buxtehude', 'source': 'Johann Sebastian Bach', 'target': 'Buxtehude', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Böhm', 'source': 'Johann Sebastian Bach', 'target': 'Böhm', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Froberger', 'source': 'Johann Sebastian Bach', 'target': 'Froberger', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Johann Caspar Kerl', 'source': 'Johann Sebastian Bach', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Pachelbel', 'source': 'Johann Sebastian Bach', 'target': 'Pachelbel', 'attributes': {'value': 3.0}}, {'key': 'Johann Sebastian Bach:Handel', 'source': 'Johann Sebastian Bach', 'target': 'Handel', 'attributes': {'value': 4.0}}, {'key': 'Johann Sebastian Bach:Couperin', 'source': 'Johann Sebastian Bach', 'target': 'Couperin', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Wilhelm Friedemann Bach', 'source': 'Johann Sebastian Bach', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 9.0}}, {'key': 'Johann Sebastian Bach:Johann Gottlieb Görner', 'source': 'Johann Sebastian Bach', 'target': 'Johann Gottlieb Görner', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Görner', 'source': 'Johann Sebastian Bach', 'target': 'Görner', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Georg Philipp Telemann', 'source': 'Johann Sebastian Bach', 'target': 'Georg Philipp Telemann', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Anna Magdalena Bach', 'source': 'Johann Sebastian Bach', 'target': 'Anna Magdalena Bach', 'attributes': {'value': 3.0}}, {'key': 'Johann Sebastian Bach:Johann Heinrich Ernesti', 'source': 'Johann Sebastian Bach', 'target': 'Johann Heinrich Ernesti', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Johann Matthias Gesner', 'source': 'Johann Sebastian Bach', 'target': 'Johann Matthias Gesner', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Maria Amalia', 'source': 'Johann Sebastian Bach', 'target': 'Maria Amalia', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Müller', 'source': 'Johann Sebastian Bach', 'target': 'Müller', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Johann Abraham Birnbaum', 'source': 'Johann Sebastian Bach', 'target': 'Johann Abraham Birnbaum', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Marianne von Ziegler', 'source': 'Johann Sebastian Bach', 'target': 'Marianne von Ziegler', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:J. C. Gottsched', 'source': 'Johann Sebastian Bach', 'target': 'J. C. Gottsched', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Johann Christian Hoffmann', 'source': 'Johann Sebastian Bach', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Haussmann', 'source': 'Johann Sebastian Bach', 'target': 'Haussmann', 'attributes': {'value': 3.0}}, {'key': 'Johann Sebastian Bach:Elias Gottlieb Haussmann', 'source': 'Johann Sebastian Bach', 'target': 'Elias Gottlieb Haussmann', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Fritz Volbach', 'source': 'Johann Sebastian Bach', 'target': 'Fritz Volbach', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Peters', 'source': 'Johann Sebastian Bach', 'target': 'Peters', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Beethoven', 'source': 'Johann Sebastian Bach', 'target': 'Beethoven', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Regine Susanna Bach', 'source': 'Johann Sebastian Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Johann Christoph Friedrich', 'source': 'Johann Sebastian Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Kerl', 'source': 'Johann Sebastian Bach', 'target': 'Kerl', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Vivaldi', 'source': 'Johann Sebastian Bach', 'target': 'Vivaldi', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Frescobaldi', 'source': 'Johann Sebastian Bach', 'target': 'Frescobaldi', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Kühnel', 'source': 'Johann Sebastian Bach', 'target': 'Kühnel', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Hoffmeister', 'source': 'Johann Sebastian Bach', 'target': 'Hoffmeister', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Reinhard Keiser', 'source': 'Johann Sebastian Bach', 'target': 'Reinhard Keiser', 'attributes': {'value': 1.0}}, {'key': 'Johann Sebastian Bach:Hasse', 'source': 'Johann Sebastian Bach', 'target': 'Hasse', 'attributes': {'value': 2.0}}, {'key': 'Johann Sebastian Bach:Johann G. Schübler', 'source': 'Johann Sebastian Bach', 'target': 'Johann G. Schübler', 'attributes': {'value': 1.0}}, {'key': 'Bruhns:Fischer', 'source': 'Bruhns', 'target': 'Fischer', 'attributes': {'value': 0.54}}, {'key': 'Bruhns:Buxtehude', 'source': 'Bruhns', 'target': 'Buxtehude', 'attributes': {'value': 0.54}}, {'key': 'Bruhns:Böhm', 'source': 'Bruhns', 'target': 'Böhm', 'attributes': {'value': 0.54}}, {'key': 'Bruhns:Froberger', 'source': 'Bruhns', 'target': 'Froberger', 'attributes': {'value': 0.54}}, {'key': 'Bruhns:Johann Caspar Kerl', 'source': 'Bruhns', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29}}, {'key': 'Bruhns:Pachelbel', 'source': 'Bruhns', 'target': 'Pachelbel', 'attributes': {'value': 0.54}}, {'key': 'Bruhns:Kerl', 'source': 'Bruhns', 'target': 'Kerl', 'attributes': {'value': 0.25}}, {'key': 'Bruhns:Vivaldi', 'source': 'Bruhns', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Bruhns:Frescobaldi', 'source': 'Bruhns', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Fischer:Buxtehude', 'source': 'Fischer', 'target': 'Buxtehude', 'attributes': {'value': 0.54}}, {'key': 'Fischer:Böhm', 'source': 'Fischer', 'target': 'Böhm', 'attributes': {'value': 0.54}}, {'key': 'Fischer:Froberger', 'source': 'Fischer', 'target': 'Froberger', 'attributes': {'value': 0.54}}, {'key': 'Fischer:Johann Caspar Kerl', 'source': 'Fischer', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29}}, {'key': 'Fischer:Pachelbel', 'source': 'Fischer', 'target': 'Pachelbel', 'attributes': {'value': 0.54}}, {'key': 'Fischer:Kerl', 'source': 'Fischer', 'target': 'Kerl', 'attributes': {'value': 0.25}}, {'key': 'Fischer:Vivaldi', 'source': 'Fischer', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Fischer:Frescobaldi', 'source': 'Fischer', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Buxtehude:Böhm', 'source': 'Buxtehude', 'target': 'Böhm', 'attributes': {'value': 0.54}}, {'key': 'Buxtehude:Froberger', 'source': 'Buxtehude', 'target': 'Froberger', 'attributes': {'value': 0.54}}, {'key': 'Buxtehude:Johann Caspar Kerl', 'source': 'Buxtehude', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29}}, {'key': 'Buxtehude:Pachelbel', 'source': 'Buxtehude', 'target': 'Pachelbel', 'attributes': {'value': 0.54}}, {'key': 'Buxtehude:Kerl', 'source': 'Buxtehude', 'target': 'Kerl', 'attributes': {'value': 0.25}}, {'key': 'Buxtehude:Vivaldi', 'source': 'Buxtehude', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Buxtehude:Frescobaldi', 'source': 'Buxtehude', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Böhm:Froberger', 'source': 'Böhm', 'target': 'Froberger', 'attributes': {'value': 0.54}}, {'key': 'Böhm:Johann Caspar Kerl', 'source': 'Böhm', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29}}, {'key': 'Böhm:Pachelbel', 'source': 'Böhm', 'target': 'Pachelbel', 'attributes': {'value': 0.54}}, {'key': 'Böhm:Kerl', 'source': 'Böhm', 'target': 'Kerl', 'attributes': {'value': 0.25}}, {'key': 'Böhm:Vivaldi', 'source': 'Böhm', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Böhm:Frescobaldi', 'source': 'Böhm', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Froberger:Johann Caspar Kerl', 'source': 'Froberger', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29}}, {'key': 'Froberger:Pachelbel', 'source': 'Froberger', 'target': 'Pachelbel', 'attributes': {'value': 0.54}}, {'key': 'Froberger:Kerl', 'source': 'Froberger', 'target': 'Kerl', 'attributes': {'value': 0.25}}, {'key': 'Froberger:Vivaldi', 'source': 'Froberger', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Froberger:Frescobaldi', 'source': 'Froberger', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Johann Caspar Kerl:Pachelbel', 'source': 'Johann Caspar Kerl', 'target': 'Pachelbel', 'attributes': {'value': 0.29}}, {'key': 'Pachelbel:Kerl', 'source': 'Pachelbel', 'target': 'Kerl', 'attributes': {'value': 0.25}}, {'key': 'Pachelbel:Vivaldi', 'source': 'Pachelbel', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Pachelbel:Frescobaldi', 'source': 'Pachelbel', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Handel:Reinhard Keiser', 'source': 'Handel', 'target': 'Reinhard Keiser', 'attributes': {'value': 0.67}}, {'key': 'Handel:Wilhelm Friedemann Bach', 'source': 'Handel', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 1.0}}, {'key': 'Handel:Hasse', 'source': 'Handel', 'target': 'Hasse', 'attributes': {'value': 0.67}}, {'key': 'Wilhelm Friedemann Bach:Beethoven', 'source': 'Wilhelm Friedemann Bach', 'target': 'Beethoven', 'attributes': {'value': 1.0}}, {'key': 'Wilhelm Friedemann Bach:Regine Susanna Bach', 'source': 'Wilhelm Friedemann Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0}}, {'key': 'Wilhelm Friedemann Bach:Anna Magdalena Bach', 'source': 'Wilhelm Friedemann Bach', 'target': 'Anna Magdalena Bach', 'attributes': {'value': 1.0}}, {'key': 'Wilhelm Friedemann Bach:Johann Christoph Friedrich', 'source': 'Wilhelm Friedemann Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0}}, {'key': 'Wilhelm Friedemann Bach:Reinhard Keiser', 'source': 'Wilhelm Friedemann Bach', 'target': 'Reinhard Keiser', 'attributes': {'value': 1.0}}, {'key': 'Wilhelm Friedemann Bach:Hasse', 'source': 'Wilhelm Friedemann Bach', 'target': 'Hasse', 'attributes': {'value': 2.0}}, {'key': 'Wilhelm Friedemann Bach:Johann G. Schübler', 'source': 'Wilhelm Friedemann Bach', 'target': 'Johann G. Schübler', 'attributes': {'value': 1.0}}, {'key': 'Johann Gottlieb Görner:Görner', 'source': 'Johann Gottlieb Görner', 'target': 'Görner', 'attributes': {'value': 1.0}}, {'key': 'Johann Gottlieb Görner:Georg Philipp Telemann', 'source': 'Johann Gottlieb Görner', 'target': 'Georg Philipp Telemann', 'attributes': {'value': 1.0}}, {'key': 'Görner:Georg Philipp Telemann', 'source': 'Görner', 'target': 'Georg Philipp Telemann', 'attributes': {'value': 1.0}}, {'key': 'Anna Magdalena Bach:Beethoven', 'source': 'Anna Magdalena Bach', 'target': 'Beethoven', 'attributes': {'value': 1.0}}, {'key': 'Anna Magdalena Bach:Regine Susanna Bach', 'source': 'Anna Magdalena Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0}}, {'key': 'Anna Magdalena Bach:Johann Christoph Friedrich', 'source': 'Anna Magdalena Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0}}, {'key': 'Maria Amalia:Müller', 'source': 'Maria Amalia', 'target': 'Müller', 'attributes': {'value': 1.0}}, {'key': 'Johann Abraham Birnbaum:Marianne von Ziegler', 'source': 'Johann Abraham Birnbaum', 'target': 'Marianne von Ziegler', 'attributes': {'value': 1.0}}, {'key': 'Johann Abraham Birnbaum:J. C. Gottsched', 'source': 'Johann Abraham Birnbaum', 'target': 'J. C. Gottsched', 'attributes': {'value': 1.0}}, {'key': 'Johann Abraham Birnbaum:Johann Christian Hoffmann', 'source': 'Johann Abraham Birnbaum', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 1.0}}, {'key': 'Marianne von Ziegler:J. C. Gottsched', 'source': 'Marianne von Ziegler', 'target': 'J. C. Gottsched', 'attributes': {'value': 0.67}}, {'key': 'Marianne von Ziegler:Johann Christian Hoffmann', 'source': 'Marianne von Ziegler', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 0.67}}, {'key': 'J. C. Gottsched:Johann Christian Hoffmann', 'source': 'J. C. Gottsched', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 0.67}}, {'key': 'Haussmann:Elias Gottlieb Haussmann', 'source': 'Haussmann', 'target': 'Elias Gottlieb Haussmann', 'attributes': {'value': 1.0}}, {'key': 'Haussmann:Fritz Volbach', 'source': 'Haussmann', 'target': 'Fritz Volbach', 'attributes': {'value': 1.0}}, {'key': 'Haussmann:Peters', 'source': 'Haussmann', 'target': 'Peters', 'attributes': {'value': 1.0}}, {'key': 'Elias Gottlieb Haussmann:Fritz Volbach', 'source': 'Elias Gottlieb Haussmann', 'target': 'Fritz Volbach', 'attributes': {'value': 1.0}}, {'key': 'Elias Gottlieb Haussmann:Peters', 'source': 'Elias Gottlieb Haussmann', 'target': 'Peters', 'attributes': {'value': 1.0}}, {'key': 'Fritz Volbach:Peters', 'source': 'Fritz Volbach', 'target': 'Peters', 'attributes': {'value': 1.0}}, {'key': 'Beethoven:Regine Susanna Bach', 'source': 'Beethoven', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0}}, {'key': 'Beethoven:Johann Christoph Friedrich', 'source': 'Beethoven', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0}}, {'key': 'Regine Susanna Bach:Johann Christoph Friedrich', 'source': 'Regine Susanna Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0}}, {'key': 'Kerl:Vivaldi', 'source': 'Kerl', 'target': 'Vivaldi', 'attributes': {'value': 1.0}}, {'key': 'Kerl:Frescobaldi', 'source': 'Kerl', 'target': 'Frescobaldi', 'attributes': {'value': 0.25}}, {'key': 'Vivaldi:Frescobaldi', 'source': 'Vivaldi', 'target': 'Frescobaldi', 'attributes': {'value': 1.0}}, {'key': 'Kühnel:Hoffmeister', 'source': 'Kühnel', 'target': 'Hoffmeister', 'attributes': {'value': 1.0}}, {'key': 'Reinhard Keiser:Hasse', 'source': 'Reinhard Keiser', 'target': 'Hasse', 'attributes': {'value': 0.67}}];