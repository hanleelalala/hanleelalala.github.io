# -*- coding: utf-8 -*-
"""
Created on Sun May 17 16:04:14 2020

@author: b0250
"""

from PIL import Image

im = Image.open(r"C:\Users\b0250\hanleelalala.github.io\images\background.jpg")
new_size = (im.height/10,im.width/10)
im_new = im.resize(new_size)