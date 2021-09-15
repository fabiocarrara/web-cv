import argparse

from scholarly import scholarly
from tqdm import tqdm
from utils import save, load

AUTHOR_ID = 'SZR6mXsAAAAJ'  # Fabio Carrara

def main(args):
    gs_author = {}
    gs_pubs = []

    if not args.force:
        gs_author = load('google_scholar_author.pkl') or {}
        gs_pubs = load('google_scholar_publications.pkl') or []
    
    gs_author = scholarly.search_author_id('SZR6mXsAAAAJ')
    gs_author = scholarly.fill(gs_author)
    save(gs_author, 'google_scholar_author.pkl')

    current_pubs_ids = {p['author_pub_id'] for p in gs_pubs}
    author_pubs_ids = {p['author_pub_id'] for p in gs_author['publications']}
    new_pubs_ids = author_pubs_ids - current_pubs_ids
    new_pubs = [p for p in gs_author['publications'] if p['author_pub_id'] in new_pubs_ids]

    # TODO update based on info available on gs_author

    for p in tqdm(new_pubs):
        p = scholarly.fill(p)
        gs_pubs.append(p)
        save(gs_pubs, 'google_scholar_publications.pkl')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Pull Google Scholar Data')
    parser.add_argument('-f', '--force', default=False, action='store_true', help='Scrape data from scratch')
    args = parser.parse_args()
    main(args)