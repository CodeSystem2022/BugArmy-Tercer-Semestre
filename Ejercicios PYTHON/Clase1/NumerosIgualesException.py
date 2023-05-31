class NumerosIgualesException (Exception):
    def __init__(self, mensaje):
        self.message = mensaje