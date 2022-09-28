import os

# Returns true if the concatenation of paths is above the limit directory
# e.g. above("/mnt", "/mnt/something") -> False
#      above("/mnt", "/usr") -> True
#      above("/mnt", "/mnt", "..", "usr") -> True
def above(limit: str, *paths: str) -> bool:
    path = real_join(*paths)
    limit = os.path.realpath(limit)

    return not path.startswith(limit)
    
def real_join(*paths: str) -> str:
    return os.path.realpath(os.path.join(*paths))