import pickle
from pathlib import Path

def save(obj, fname):
    with open(fname, 'wb') as cf:
        pickle.dump(obj, cf)


def load(fname):
    fname = Path(fname)
    if fname.exists():
        with open(fname, 'rb') as cf:
            return pickle.load(cf)
    return None