from django.shortcuts import render
from django.views.generic.base import View
import random
# Create your views here.
class Capcha(View):
    def get(self, request):
        planta1 ={'imagen':'flor_1.png', 'is_flower': True}
        planta2 ={'imagen':'flor_2.png','is_flower': True}
        planta3 ={'imagen':'error_3.png','is_flower': False}
        planta4 ={'imagen':'flor_4.png', 'is_flower': True}
        planta5 ={'imagen':'error_1.png', 'is_flower': False}
        planta6 ={'imagen':'error_2.png', 'is_flower': False}
        animal1 ={'imagen': 'perro_1.png', 'is_dog': True}
        animal2 ={'imagen': 'perro_2.png', 'is_dog': True}
        animal3 ={'imagen': 'perro_3.png', 'is_dog': True}
        animal4 ={'imagen': 'animal_1.png', 'is_dog': False}
        animal5 ={'imagen': 'animal_2.png', 'is_dog': False}
        animal6 ={'imagen': 'animal_3.png', 'is_dog': False}
        array_plantas = [planta6, planta1,planta2, planta3,planta5, planta4]
        random.shuffle(array_plantas)
        array_animales = [animal6, animal1,animal2, animal3,animal5, animal4]
        random.shuffle(array_animales)
        data = {
                'plantas': array_plantas,
                'animales': array_animales,
            }
        return render(request,'template1.html', context = data)