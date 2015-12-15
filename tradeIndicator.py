import changePredictors

class TradeIndicator:
	def __init__(self):
		self.size = 0
		self.experts = [changePredictors.randomForestChangePredictor(),
						changePredictors.neuralNetworkChangePredictor()]
		
	def indicate(self, arr):
		self.size += 1
		vals = []
		for i in range(0, len(self.experts)):
			vals.append(self.experts[i].predict(arr))
			if vals[i] is None:
				return None 
		return reduce(lambda x, y: x + y, vals) / len(vals)

	def readyToTrade(self):
		if self.size > 100:
			return True
		else:
			return False

if __name__ == '__main__':
	print "tradeIndicator Test"
	test = TradeIndicator()
	for x in range(100):
		print "Test: " + str(test.indicate([x*2, x]))
		#test.indicate([x*2, x, x+2])