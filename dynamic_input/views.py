import json
from django.shortcuts import render
from django.http import HttpResponse

from .models import InputResult


def dynamic_inputs(request):
    if request.method == "POST":
        result_json = json.loads(request.body)
        InputResult.objects.create(result=result_json)
        return HttpResponse(status=200)
    else:
        return render(request, 'dynamic_input/inputs.html')


def inputs_result(request):
    result_json = {}
    json_fields = InputResult.objects.all()
    for row in json_fields:
        result_json[f"JSON{row.id}"] = row.result
    result = json.dumps(result_json)
    return render(request, 'dynamic_input/results.html', {'json': result, })
