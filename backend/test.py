import json

newfile = []

f = open('dataset.json')

data = json.load(f)

for index, inv in enumerate(data):
    newfile.append({
        "model": "investments.Investments",
        "pk": index + 1,
        "fields": inv
    })

print(newfile)

with open("investments.json", "w") as outfile:
    json.dump(newfile, outfile)