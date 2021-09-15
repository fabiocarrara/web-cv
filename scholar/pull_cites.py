import argparse
import json
import re

from scholarly import scholarly 

def _parse(pub):
    first_word = re.split(r'[^a-zA-Z0-9_\-]', pub['bib']['title'])[0].lower()
    pub_year = pub['bib'].get('pub_year', 'XXXX')
    ref = '{}{}'.format(pub_year, first_word)
    cites = pub.get('num_citations', 0)
    return ref, cites


def main(args):
    print('Querying Google Scholar ...')
    author = scholarly.search_author_id('SZR6mXsAAAAJ')
    author = scholarly.fill(author, sections=['publications'])
    pubs = map(_parse, author['publications'])
    cites = {x[0]: x[1] for x in pubs if x[1] > 0}
    # jsonp = 'cites = {};'.format()
    jsonp = json.dumps(cites)
    with open(args.output, 'w') as out:
        out.write(jsonp)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Pull Google Scholar Citations')
    parser.add_argument('-o', '--output', default='cites.json', help='Output path')
    args = parser.parse_args()
    main(args)


