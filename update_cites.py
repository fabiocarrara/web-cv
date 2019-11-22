import sys
sys.path += ['scholarly']

import json
import scholarly

def _parse(pub):
    first_word = pub.bib['title'].split(' ')[0].lower()
    ref = '{}{}'.format(pub.bib.get('year', 'XXXX'), first_word)
    cites = getattr(pub, 'citedby', 0)
    return ref, cites

if __name__ == '__main__':
    print('Querying Google Scholar ...')
    author = scholarly.search_author('Fabio Carrara')
    author = next(author).fill()
    pubs = map(_parse, author.publications)
    cites = {x[0]: x[1] for x in pubs if x[1] > 0}
    jsonp = 'cites = {};'.format(json.dumps(cites))
    open('cites.js', 'w').write(jsonp)

