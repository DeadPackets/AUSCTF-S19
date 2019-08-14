#include <iostream>
#include <string>
using namespace std;

int main()
{
	cout << "You want the flag huh? Prove you are me, vladimir." << endl;
	cout << "What is the name of my favorite pet?: ";
	string input;
	cin >> input;

	if (input == "anastasia")
	{
		cout << "Correct. Here you go." << endl << endl << "flag{VladimirTheWorstHacker}" << endl;
	}
	else
	{
		cout << "Wrong. Get lost." << endl;
	}
}