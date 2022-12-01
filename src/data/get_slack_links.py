import os, json
from os.path import exists

#gets links, with the result being a csv file with a list of links
def get_links():
    name = input('What is the folder called that contains the json files? (e.g., random): ')
    fileName = name+'/'

    if exists(fileName):
    
        # find our json files (this looks in the folder called random)
        path_to_json = fileName
        json_files = [pos_json for pos_json in os.listdir(path_to_json) if pos_json.endswith('.json')]
        link_array = []
        json_array = []
        forbidden_links = ['https://www.youtube.com/', 'https://www.google.com/']
        # traverse all json files to flatten and add url & url thumbnail images
        for index, js in enumerate(json_files):
            with open(os.path.join(path_to_json, js)) as json_file:
                json_text = json.load(json_file)
                flat_json = flatten_data(json_text)
                for item in flat_json:
                    value = flat_json[item]
                    if (('url' in item) and (value not in link_array) and (type(value) is str) and ('files.slack.com' not in value) and (value not in forbidden_links)):
                        link_array.append(value)

        #iterate new stuff to turn into json
        for index, item in enumerate(link_array):
            if is_image(item):
                json_array[len(json_array)-1]['image'] = item
            else:
                json_array.append({'id': 'id_'+item, 'link': item, 'image': ''})

        #combine with old stuff 
        outputFilename = 'current_links.json'
        file_exists = exists(outputFilename)
        if file_exists:
                f = open(outputFilename)
                oldJson = json.load(f)
                for obj in oldJson['data']:
                    if obj['link'] not in link_array:
                        json_array.append(obj)

        finalJson = {'data': json_array}
        
        with open(outputFilename, 'w') as my_file:
            json.dump(finalJson, my_file)
            print('Done!')
    
    else:
        print('Sorry, could not find that file name. Make sure it is there!')

#helper function to flatten json, making it easier to iterate
def flatten_data(y):
    out = {}
    def flatten(x, name=''):
        if type(x) is dict:
            for a in x:
                flatten(x[a], name + a + '_')
        elif type(x) is list:
            i = 0
            for a in x:
                flatten(a, name + str(i) + '_')
                i += 1
        else:
            out[name[:-1]] = x
    flatten(y)
    return out

#helper function to check if a url is a thumbnail image 
def is_image(str):
    imgEndings = ['.jpg', '.jpeg', '.png']
    for ending in imgEndings:
        if str.endswith(ending):
            return True
    return False

get_links()