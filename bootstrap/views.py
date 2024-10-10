from django.shortcuts import render
from django.views.generic.base import View

class Bootstrap(View):
    def get(self, request):
        oficio1 = {'imagen':'perro.png', 'office_name': 'Pasear al perro'}
        oficio2 = {'imagen':'lavar-platos.png', 'office_name': 'Lavar los platos'}
        oficio3 = {'imagen':'escoba.png', 'office_name': 'Barrer'}
        oficio4 = {'imagen':'basura.png', 'office_name': 'Sacar la basura'}
        oficio5 = {'imagen':'lavarr.png', 'office_name': 'Lavar la ropa'}
        oficio6 = {'imagen':'comida.png', 'office_name': 'Comprar comida'}
        array_oficios = [oficio1, oficio2, oficio3, oficio4, oficio5, oficio6]
        data = {            
          'oficios': array_oficios,
            }
        return render(request,'index.html', context = data)
