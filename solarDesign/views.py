from django.shortcuts import render
from solarDesign.forms import PVForm


def index(request):
    return render(request, 'solarDesign/index.html')


def pv_calculator(request):
    if request.method == 'POST':
        form = PVForm(request.POST)
        if form.is_valid():
            pincode = form.cleaned_data['pincode']
            system = form.cleaned_data['system_load']
            roof_area_has = form.cleaned_data['roof_area']
            print pincode
            print system
            print roof_area_has
            system_cost = 0
            if system == 1:
                system_cost = 90000
            elif system in range(2, 11):
                system_cost = float(system) * 90000 * 0.889
            elif system in range(11, 30):
                system_cost = float(system) * 90000 * 0.87
            elif system in range(30, 40):
                system_cost = float(system) * 90000 * 0.86
            elif system in range(40, 80):
                system_cost = float(system) * 90000 * 0.85
            elif system in range(80, 100):
                system_cost = float(system) * 90000 * 0.845
            print system_cost
            units_generated = 1535 * system
            print units_generated
            units_generated_25 = 34100 * system
            print units_generated_25
            yearly_cost = system_cost * 0.01
            print yearly_cost
            saving_25 = system * 850000
            paybacktime = 6
            saving_1 = float(units_generated) * 8.5
            roof_top_req = system * 120
            covered_area = (float(roof_top_req) / float(roof_area_has)) * 100
            panels = system * 4
            data = {
                'system_load': system,
                'system_cost': system_cost,
                'units_generated': units_generated,
                'units_in_25': units_generated_25,
                'yearly_cost': yearly_cost,
                'saving_25': saving_25,
                'saving_1': saving_1,
                'payback': paybacktime,
                'rooftop': roof_top_req,
                'percentage_roof': covered_area,
                'panels': panels,
            }
            return render(request, 'solarDesign/data.html', data)
    else:
        form = PVForm()
    return render(request, 'solarDesign/calc.html', {'form': form})
